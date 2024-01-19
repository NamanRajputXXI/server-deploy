const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

// this is a custom error handler middlware. If there is no custom error handler and the error is passed in the next() function, express will handle the errors using its own default error handler.

module.exports = errorHandlerMiddleware