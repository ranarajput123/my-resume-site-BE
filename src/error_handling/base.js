'use strict';

// Here is the base error classes to extend from

class ApplicationError extends Error {
	get name() {
		return this.constructor.name;
	}
}

class DatabaseError extends ApplicationError {}

class UserFacingError extends ApplicationError {}

export { ApplicationError, DatabaseError, UserFacingError };
