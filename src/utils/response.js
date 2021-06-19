import { RETURN_CODE } from './constants';

export const ReS = (res, msg, data, code) => {
	return res.status(code).json({
		message: msg,
		data,
	});
};
export const ReE = (res, msg, code) => {
	return res.status(code).send(msg);
};

export const ReC = (res, type, token, httpOnly) => {
	return res.cookie(type, token, { httpOnly }).sendStatus(RETURN_CODE.SUCCESS);
};
export const ReC_Continue = (res, type, token, httpOnly) => {
	return res.cookie(type, token, { httpOnly, sameSite: 'None', secure: true });
};
