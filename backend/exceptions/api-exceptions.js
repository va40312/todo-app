class ApiError extends Error {
  constructor(status, message, errors=[]) {
    super()
    this.status = status
    this.message = message
    this.errors = errors
  }

  static UnauthorizedError(message, errors) {
    return new ApiError(401, message, errors)
  }

  static BadRequest(message, errors) {
    return new ApiError(400, message, errors)
  }
}

module.exports = ApiError