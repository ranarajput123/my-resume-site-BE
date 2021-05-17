import validator from "validator";
import { BadRequestError } from "../../error_handling/userFacingErrors";

const isEmail = (email) => {
  if (validator.isEmail(email)) return true;
  throw new BadRequestError("Please provide correct Email");
};
const isStrongPassword = (password) => {
  console.log(validator.isStrongPassword);
  if (validator.isStrongPassword(password)) return true;
  throw new BadRequestError("Please set a strong Password");
};
const isAlphabetsWithOptionalSpaces = (val, key) => {
  if (validator.isAlpha(val.replace(/ /g, ""))) return true;
  throw new BadRequestError(`Please provide correct value for ${key}`);
};
const isAlphabets = (val, key) => {
  if (validator.isAlpha(val)) return true;
  throw new BadRequestError(`Please provide correct value for ${key}`);
};
const isAlphaNumericWithOptionalSpaces = (val, key) => {
  if (validator.isAlphanumeric(val.replace(/ /g, ""))) return true;
  throw new BadRequestError(`Please provide correct value for ${key}`);
};
const isAlphanumeric = (val,key) =>{
  if (validator.isAlphanumeric(val)) return true;
  throw new BadRequestError(`Please provide correct value for ${key}`);
}
const isNotEmpty = (key, value) => {
  if (!validator.isEmpty(value)) return true;
  throw new BadRequestError(`Please provide ${key}`);
};

const haveNoMaliciousField = (fieldsArr,allowedUpdateFields) => {
  const diff = fieldsArr.filter((field) => !allowedUpdateFields.includes(field))
  if (diff.length)
    throw new BadRequestError(`Malformed Data given, [${diff.toString()}]`);
  return true;
};
const hasRequiredFields = (fieldsArr,requiredFields) =>{
  const diff = requiredFields.filter((field) => !fieldsArr.includes(field))
  if (diff.length)
    throw new BadRequestError(`Please Provide All The Required Fields,[${diff.toString()}]`);
  return true;
}
export { hasRequiredFields,isAlphanumeric,isAlphabets,haveNoMaliciousField,isAlphaNumericWithOptionalSpaces,isEmail, isStrongPassword, isAlphabetsWithOptionalSpaces, isNotEmpty };
