const errorMiddleware = (err, req, res, _) => {
  console.log(`Root LEVEL ERROR : ${err.stack}`);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "CastError") {

    message = `Resource not found with id of ${err.value}`;
    statusCode = 404;
  }

  if (err.code === 11000) {
    message = "Duplicate field value entered";
    statusCode = 400;
  }

  if (err.name === "ValidationError") {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    statusCode = 400;
  }

  if (err.name === "TokenExpiredError") {
    message = `Token Expired`;
    statusCode = 401;
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorMiddleware;
