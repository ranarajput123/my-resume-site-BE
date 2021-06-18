import { Error as MongooseError } from 'mongoose';
import { ApplicationError } from '../../error_handling/base';
import getMongooseError from './mongoose-errorHandler';
import { ReE } from '../response';

// eslint-disable-next-line no-unused-vars
export default function handleErrors(err, _req, res, _next) {
	if (err instanceof MongooseError) {
		const { message, statusCode } = getMongooseError(err);
		return ReE(res, message, statusCode);
	} else if (err instanceof ApplicationError) {
		return ReE(res, err.message, err.statusCode || 500);
	}
	return ReE(res, err.message, 500);
	// if (err instanceof NotFoundError) {
	// res.sendStatus(err.statusCode);

	// or
	// res.status(err.statusCode || 500).send(err.message)
	// } else {
	//     res.sendStatus(500)
	// }

	// do your logic
	// logger.error(err, 'Parameters: ', req.params, 'User data: ', req.user)
}
