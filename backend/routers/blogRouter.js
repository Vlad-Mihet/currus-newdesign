import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'
import data from '../data.js'

const blogRouter = express.Router()

blogRouter.get('/', expressAsyncHandler(async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
}))

blogRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Blog.remove();
    const createdBlogs = await Blog.insertMany(data.blogs)
    res.send(createdBlogs)

}))

export default blogRouter;
