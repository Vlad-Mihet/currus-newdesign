import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routers/productRouter.js';

dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use('/api/products', productRouter)


app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = 5001;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})

