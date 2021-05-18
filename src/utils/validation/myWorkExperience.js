import {
	haveNoMaliciousField,
	isAlphabets,
	isAlphabetsWithOptionalSpaces,
	isObjectIDsArray,
	isNotEmpty,
	isObjectId,
} from './generalValidations';

const allowedUpdateFields = [
	'company',
	'company_city',
	'company_country',
	'clients',
	'from',
	'to',
	'responsibilities',
	'role',
	'skills_used',
	'work_experience_id',
];
export const updateValidator = (req, _res, next) => {
	haveNoMaliciousField(Object.keys(req.body), allowedUpdateFields);
	isNotEmpty('Work Experience Reference ID', req.body.work_experience_id);
	isObjectId(req.body.work_experience_id);
	if (req.body.nationality) {
		isAlphabets(req.body.nationality, 'Nationality');
	}
	if (req.body.company_country) {
		isAlphabetsWithOptionalSpaces(req.body.company_country, 'Company Country');
	}
	if (req.body.company_city) {
		isAlphabetsWithOptionalSpaces(req.body.company_city, 'Company City');
	}
	if (req.body.clients) isObjectIDsArray(req.body.clients, 'Clients');
	next();
};
export const createValidator = (req, _res, next) => {
	haveNoMaliciousField(Object.keys(req.body), allowedUpdateFields);
	const { nationality, company_city, company_country, clients } = req.body;
	isNotEmpty('Nationality', nationality);
	isNotEmpty('Comapny City', company_city);
	isNotEmpty('Company Country', company_country);
	isAlphabets(nationality, 'Nationality');
	isAlphabetsWithOptionalSpaces(company_country, 'Company Country');
	isAlphabetsWithOptionalSpaces(company_city, 'Company City');
	isObjectIDsArray(clients, 'Clients');
	next();
};
