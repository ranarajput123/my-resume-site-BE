import {
	haveNoMaliciousField,
	isAlphabetsWithOptionalSpaces,
	isNotEmpty,
	isObjectId,
	isObjectIDsArray,
} from './generalValidations';

const allowedFields = [
	'client',
	'role',
	'responsibilities',
	'stack',
	'client_project_id',
	'other',
	'description',
];
export const updateValidator = (req, res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { career_project_id, client, role, stack, other } = req.body;
	isNotEmpty('Career Project Reference ID', career_project_id);
	isObjectId(career_project_id);
	if (client) isObjectId(client);
	if (role) isAlphabetsWithOptionalSpaces(role, 'Role');
	if (stack) isObjectIDsArray(stack, 'Stack Array');
	if (other) isObjectIDsArray(other, 'Other Array');
	next();
};

export const createValidator = (req, res, next) => {
	haveNoMaliciousField(Object.keys(req.body), allowedFields);
	const { client, role, stack, other } = req.body;
	isNotEmpty('Client Reference ID', client);
	isObjectId(client);
	isNotEmpty('Role', role);
	isAlphabetsWithOptionalSpaces(role, 'Role');
	// isNotEmpty('Stack Array', stack);
	isObjectIDsArray(stack, 'Stack Array');
	// isNotEmpty('Technologies', technologies);
	isObjectIDsArray(other, 'Other');
	next();
};
