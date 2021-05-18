import {
  haveNoMaliciousField,
  isAlphabetsWithOptionalSpaces,
  isNotEmpty,
  isObjectId,
  isObjectIDsArray,
} from "./generalValidations";

const allowedFields = [
  "client",
  "role",
  "responsibilities",
  "stack",
  "career_project_id",
  "technologies",
  "description",
];
export const updateValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { career_project_id, client, role, stack, technologies } = req.body;
  isNotEmpty("Career Project Reference ID", career_project_id);
  isObjectId(career_project_id);
  if (client) isObjectId(client);
  if (role) isAlphabetsWithOptionalSpaces(role, "Role");
  if (stack) isObjectIDsArray(stack, "Stack Array");
  if (technologies) isObjectIDsArray(technologies, "Technologies Array");
  next();
};

export const createValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { client, role, stack, technologies } = req.body;
  isNotEmpty("Client Reference ID", client);
  isObjectId(client);
  isNotEmpty("Role", role);
  isAlphabetsWithOptionalSpaces(role, "Role");
  isNotEmpty("Stack Array", stack);
  isObjectIDsArray(stack, "Stack Array");
  isNotEmpty("Technologies", technologies);
  isObjectIDsArray(technologies, "Technologies");
  next();
};
