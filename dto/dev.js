const joi = require('@hapi/joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  firstName: joi.string().required(),
  dob: joi.string().isoDate().required(),
  countryCode: joi.string().min(2).max(2).empty('').default('US'),
});
