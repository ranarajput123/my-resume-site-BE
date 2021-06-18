import {
	haveNoMaliciousField,
	isAlphabetsWithOptionalSpaces,
	isNotEmpty,
	isObjectId,
	isURL,
} from './generalValidations';

const allowedFields = [
	'client_name',
	'client_city',
	'client_country',
	'client_business',
	'client_id',
	'logo',
	'url'
];
export const updateValidator = (req, _res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { logo, url, client_name, client_city, client_country, client_id } = req.body;
	isNotEmpty('Client Reference ID', client_id);
	isObjectId(client_id);
	if (client_name) isAlphabetsWithOptionalSpaces(client_name, 'Client Name');
	if (client_country)
		isAlphabetsWithOptionalSpaces(client_country, 'Client Country');
	if (client_city) isAlphabetsWithOptionalSpaces(client_city, 'Client City');
	if (logo) isURL(logo);
	if (url) isURL(url);
	next();
};
export const createValidator = (req, _res, next) => {
	haveNoMaliciousField(Object.keys(req.body), allowedFields);
	const { logo, url, client_name, client_city, client_country } = req.body;
	isNotEmpty('Client Name', client_name);
	isNotEmpty('Client City', client_city);
	isNotEmpty('Client Country', client_country);
	isNotEmpty(logo);
	isAlphabetsWithOptionalSpaces(client_name, 'Client Name');
	isAlphabetsWithOptionalSpaces(client_country);
	isAlphabetsWithOptionalSpaces(client_city, 'Client City');
	isURL(logo);
	if (url) isURL(url);
	next();
};
