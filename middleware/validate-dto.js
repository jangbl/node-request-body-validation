const ApiError = require('../error/api-error');

function validateDto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      // replace request body with validated schema object
      // so that default values are applied to the DTO
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}

module.exports = validateDto;
