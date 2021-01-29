import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js'

const productRouter = express.Router();


productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Product.deleteMany();
    const createdProducts = await Product.insertMany(data.products)
    res.send(createdProducts)
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.send(product)
    }
    else {
        res.status(404).send({message: 'Product Not Found'})
    }
}))

productRouter.get('/:id/reviews', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    const reviews = product.reviews
    if(reviews) {
        res.send(reviews)
    }
    else {
        res.status(404).send({message: 'Reviews Not Found'})
    }
}))

productRouter.post('/:id/reviews', expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId)
    
    if (product) {
        const review = {
            _id: Math.random(),
            author: req.body.author,
            stars: Number(req.body.stars),
            pros: req.body.pros,
            cons: req.body.cons,
            detail: req.body.detail,
            date: Date.now()
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length;
        product.rating = product.reviews.reduce((a, c) => c.rating + a, 0) / product.reviews.length
        const updatedProduct = await product.save()
        res.status(201).send({ message: 'Review created', reviews: updatedProduct.reviews });

    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }

}))


export default productRouter;