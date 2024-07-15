const express = require('express')
const authRouter = require('./authRouter')
const todoRouter = require('./todoRouter')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.use("/auth", authRouter)
router.use("/todos", authMiddleware, todoRouter)

module.exports = router