import { RETURN_CODE } from "../utils/constants";
import { UserFacingError } from "./base";

class BadRequestError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);


    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }

  get statusCode() {
    return RETURN_CODE.BAD_REQUEST;
  }
}

class UnauthorizedError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);


    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
  get statusCode() {
    return RETURN_CODE.BAD_REQUEST;
  }
}


class NotFoundError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
  get statusCode() {
    return RETURN_CODE.NOT_FOUND;
  }
}
class ForbiddenError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
  get statusCode() {
    return RETURN_CODE.FORBIDDEN;
  }
}

export { ForbiddenError,BadRequestError, NotFoundError, UnauthorizedError };
