const ApiError = require('./api-error');

function apiErrorHandler(err, req, res, next) {
  // in prod, don't use console.error or console.log
  // because it is not async
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;
