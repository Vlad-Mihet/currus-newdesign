import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routers/productRouter.js';
import blogRouter from './routers/blogRouter.js';
import dealerRouter from './routers/dealerRouter.js'
import userRouter from './routers/userRouter.js';
import contactRouter from './routers/contactRouter.js';

dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/dealers', dealerRouter);
app.use('/api/contacts', contactRouter)


app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = 5001;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})

