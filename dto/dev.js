const yup = require('yup');

module.exports = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().trim().required(),
  dob: yup.date().required(),
  countryCode: yup.string().trim().min(2).max(2).default('US')
});
