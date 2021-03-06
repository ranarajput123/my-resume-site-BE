import { UnauthorizedError } from '../../error_handling/userFacingErrors';
import jwt from 'jsonwebtoken';

const withAuth = (req, res, next) => {
	const { token } = req.cookies;
	if (!token) {
		throw new UnauthorizedError('Unauthorized: No Token Found');
	} else {
		// eslint-disable-next-line no-undef
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				throw new UnauthorizedError('Unauthorized: Invalid token');
			} else {
				req.id = decoded.id;
				req.email = decoded.email;
				req.name = decoded.name;
				req.role = decoded.role;
				next();
			}
		});
	}
};

export { withAuth };
