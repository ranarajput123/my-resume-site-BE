import { Error } from 'mongoose';
import { RETURN_CODE } from '../constants';

// TODO complete check of all errors and send appropriate response
export default (err) => {
	if (err instanceof Error.ValidationError) {
		return {
			message: `Please provide appropriate values for ${Object.keys(
				err.errors
			).toString()}`,
			statusCode: RETURN_CODE.BAD_REQUEST,
		};
	}
	// else if(err instanceof Error.)
};
