const ApiError = require('../error/api-error');

function validateDto(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(ApiError.badRequest(error));
      return;
    }
    req.body = value;
    next();
  };
}

module.exports = validateDto;
