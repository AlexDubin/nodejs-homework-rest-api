class HttpError extends Error {
  constructor(status, message = HttpError.messages[status]) {
    super(message);
    this.status = status;
    this.name = "HttpError";
  }
}

HttpError.messages = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
  500: "Internal server error",
};

module.exports = HttpError;