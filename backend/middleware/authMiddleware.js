const jwt = require('jsonwebtoken')
const user = require('../models/user')
const ApiError = require('../exceptions/api-exceptions')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      throw ApiError.UnauthorizedError("token is empty")
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    if (!decodedData.id) {
      throw ApiError.UnauthorizedError("id is empty")
    }

    const condidate = await user.findOne({ _id: decodedData.id })
    if (!condidate) {
      throw ApiError.UnauthorizedError("user is not exist")
    }
    
    req.user = decodedData
    next()
  } catch(e) {
    return res.status(403).json({
      message: "User not authorized.",
      reason: e.message
    })
  }
}