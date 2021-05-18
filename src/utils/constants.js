export const RETURN_CODE = {
	NOT_FOUND: 404,
	UNAUTHORISED : 401,
	SUCCESS : 200,
	INTERNAL_SERVER_ERROR: 500,
	BAD_REQUEST: 400,
	CONFLICT : 409,
	CREATED: 201,
	NO_CONTENT: 204,
	ACCEPTED: 202, // When request is accepted and recorded but hasnt yet been fully proccessed. 
	RESET: 205, // Means reset the state of view when something is submitted to BE like a form
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
};
export const COOKIE_TYPE = {
	TOKEN:'token'
};