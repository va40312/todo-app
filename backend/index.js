require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const helmet = require('helmet')
const apiRouter = require('./routers/apiRouter')
const loggerMiddleware = require('./middleware/loggerMiddleware')
const port = process.env.PORT || 5000

const app = express()

// app.use(loggerMiddleware)
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", apiRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    app.listen(port, () => console.log(`start server on port: ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()