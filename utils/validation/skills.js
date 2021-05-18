import {
  haveNoMaliciousField,
  isAlphabetsWithOptionalSpaces,
  isNotEmpty,
  isObjectId,
} from "./generalValidations";

const allowedFields = ["skill_name", "description", "domain","skill_id"];
export const createValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { skill_name, domain, description } = req.body;
  isNotEmpty(skill_name);
  isNotEmpty(domain);
  isNotEmpty(description);
  isAlphabetsWithOptionalSpaces(skill_name);
  isAlphabetsWithOptionalSpaces(domain);
  next();
};
export const updateValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { skill_name, domain, skill_id } = req.body;
  isNotEmpty(skill_id);
  isObjectId(skill_id);
  if (skill_name) isAlphabetsWithOptionalSpaces(skill_name);
  if (domain) isAlphabetsWithOptionalSpaces(domain);
};
