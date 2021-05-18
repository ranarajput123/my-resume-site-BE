import {
	haveNoMaliciousField,
	isAlphabetsWithOptionalSpaces,
	isNotEmpty,
	isObjectId,
} from './generalValidations';

const allowedFields = [
	'client_name',
	'client_city',
	'client_country',
	'client_business',
	'client_id',
];
export const updateValidator = (req, _res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { client_name, client_city, client_country, client_id } = req.body;
	isNotEmpty('Client Reference ID', client_id);
	isObjectId(client_id);
	if (client_name) isAlphabetsWithOptionalSpaces(client_name, 'Client Name');
	if (client_country)
		isAlphabetsWithOptionalSpaces(client_country, 'Client Country');
	if (client_city) isAlphabetsWithOptionalSpaces(client_city, 'Client City');
	next();
};
export const createValidator = (req, _res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { client_name, client_city, client_country } = req.body;
	isNotEmpty('Client Name', client_name);
	isNotEmpty('Client City', client_city);
	isNotEmpty('Client Country', client_country);
	isAlphabetsWithOptionalSpaces(client_name, 'Client Name');
	isAlphabetsWithOptionalSpaces(client_country);
	isAlphabetsWithOptionalSpaces(client_city, 'Client City');
	next();
};
