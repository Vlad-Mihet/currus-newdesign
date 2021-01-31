import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routers/productRouter.js';
import dealerRouter from './routers/dealerRouter.js'
import userRouter from './routers/userRouter.js';
import contactRouter from './routers/contactRouter.js';
import newsletterRouter from './routers/newsletterRouter.js'
import returnRouter from './routers/returnRouter.js'
import warrantyRouter from './routers/warrantyRouter.js'
import orderRouter from './routers/orderRouter.js'
import path from 'path';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __dirname = path.resolve();

dotenv.config()

const app = express();

app.use(express.static(path.join(__dirname, '/frontend/build')));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/dealers', dealerRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/newsletters', newsletterRouter);
app.use('/api/returns', returnRouter);
app.use('/api/warranties', warrantyRouter);
app.use('/api/orders', orderRouter)

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')))

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

const port = 5001;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})

