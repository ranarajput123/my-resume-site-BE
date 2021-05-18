import {
	haveNoMaliciousField,
	isAlphabetsWithOptionalSpaces,
	isNotEmpty,
	isObjectId,
} from './generalValidations';

const allowedFields = ['skill_name', 'description', 'domain', 'skill_id'];
export const createValidator = (req, _res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { skill_name, domain, description } = req.body;
	isNotEmpty('Skill_Name', skill_name);
	isNotEmpty('Domain', domain);
	isNotEmpty('Description', description);
	isAlphabetsWithOptionalSpaces(skill_name, 'Skill Name');
	isAlphabetsWithOptionalSpaces(domain, 'Domain');
	next();
};
export const updateValidator = (req, _res, next) => {
	haveNoMaliciousField(req.body, allowedFields);
	const { skill_name, domain, skill_id } = req.body;
	isNotEmpty('Skill ID', skill_id);
	isObjectId(skill_id);
	if (skill_name) isAlphabetsWithOptionalSpaces(skill_name, 'Skill Name');
	if (domain) isAlphabetsWithOptionalSpaces(domain, 'Domain');
	next();
};
