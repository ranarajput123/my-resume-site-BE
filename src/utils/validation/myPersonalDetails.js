import { BadRequestError } from '../../error_handling/userFacingErrors';
import {
	haveNoMaliciousField,
	isAlphabets,
	isAlphabetsWithOptionalSpaces,
	isEmail,
} from './generalValidations';

const allowedUpdateFields = [
	'email',
	'nationality',
	'current_city',
	'current_country',
	'languages',
];
export const updateValidator = (req, _res, next) => {
	haveNoMaliciousField(Object.keys(req.body), allowedUpdateFields);
	if (req.body.nationality) {
		isAlphabets(req.body.nationality, 'Nationality');
	}
	if (req.body.current_country) {
		isAlphabetsWithOptionalSpaces(req.body.current_country, 'Current Country');
	}
	if (req.body.current_city) {
		isAlphabetsWithOptionalSpaces(req.body.current_city, 'Current City');
	}
	if (req.body.email) {
		isEmail(req.body.email);
	}
	if (req.body.languages) {
		isLanguagesArray(req.body.languages);
	}
	next();
};
const isLanguagesArray = (langArr) => {
	if (
		Array.isArray(langArr) &&
		langArr.length &&
		typeof langArr[0] == 'object' &&
		haveNoMaliciousField(
			Object.keys(langArr.reduce((prev, curr) => ({ ...prev, ...curr }), {})),
			['lang', 'proficiency']
		)
	) {
		return true;
	}
	throw new BadRequestError(
		'The languages array needs to be in format like [{\'lang\':<Language>,\'proficiency\':<EXCELLENT or Good etc>}]'
	);
};
