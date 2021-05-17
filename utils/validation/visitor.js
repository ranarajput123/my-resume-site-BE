import {
  isEmail,
  isAlphabetsWithOptionalSpaces,
  isNotEmpty,
  isStrongPassword,
  isAlphaNumericWithOptionalSpaces,
  haveNoMaliciousField,
} from "./generalValidations";
const allowedUpdateFields = ["name", "company", "email"];
const signUpValidator = (req, res, next) => {
  isNotEmpty("Email", req.body.email);
  isNotEmpty("Password", req.body.password);
  isNotEmpty("Name", req.body.name);
  isEmail(req.body.email);
  isStrongPassword(req.body.password);
  isAlphabetsWithOptionalSpaces(req.body.name, "Name");
  if (req.body.company) {
    isAlphaNumericWithOptionalSpaces(req.body.company, "Company");
  }
  next();
};

const signInValidator = (req, res, next) => {
  isNotEmpty("Email", req.body.email);
  isNotEmpty("Password", req.body.password);
  isEmail(req.body.email);
  next();
};
const updateValidator = (req, res, next) => {
  haveNoMaliciousField(Object.keys(req.body), allowedUpdateFields);
  if (req.body.company) {
    isAlphaNumericWithOptionalSpaces(req.body.company, "Company");
  }
  if (req.body.email) {
    isEmail(req.body.email);
  }
  if (req.body.name) {
    isAlphabetsWithOptionalSpaces(req.body.name, "Name");
  }
  next();
};
export { signUpValidator, signInValidator, updateValidator };
