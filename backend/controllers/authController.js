const registerDTOSchema = require("../dto/registerDTO");
const brypt = require('bcryptjs');
const User = require("../models/user");
const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '24h'})
}

class AuthController {
  async login(req, res) {
    try {
      const {login, password} = req.body

      const user = await User.findOne({ login })

      if (!user) {
        throw new Error("user with this login is not exist")
      }
      
      const validPassword = brypt.compareSync(password, user.password)
      if (!validPassword) {
        throw new Error("incorrect password")
      }

      const token = generateAccessToken(user._id)

      res.json({
        success: true,
        accessToken: token,
        user: {
          id: user.id,
          login: user.login
        }
      })
    } catch(e) {
      console.log(e)
      res.status(400).json({
        success: false,
        errorType: "Login error",
        message: e.message,
        errors: e.errors
      })
    }
  }

  async register(req, res) {
    try {
      registerDTOSchema.parse(req.body);
      const { login, password } = req.body

      const candidate = await User.findOne({ login })
      if (candidate) {
        throw new Error("user with this login is exist.")
      }

      const hashedPassword = brypt.hashSync(password, 8)

      const user = new User({
        login,
        password: hashedPassword
      })

      await user.save()

      const token = generateAccessToken(user._id)

      res.status(201).json({
        success: true,
        accessToken: token,
        user: {
          id: user.id,
          login: user.login
        }
      })

    } catch(e) {
      console.log(e)
      res.status(400).json({
        success: false,
        errorType: "Register error",
        message: e.message,
        errors: e.errors
      })
    }
  }
}

module.exports = new AuthController()