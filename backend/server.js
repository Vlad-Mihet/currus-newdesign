import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 5001;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})

