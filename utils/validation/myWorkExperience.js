import {
  haveNoMaliciousField,
  isAlphabets,
  isAlphabetsWithOptionalSpaces,
} from "./generalValidations";

const allowedUpdateFields = [
  "company",
  "company_city",
  "company_country",
  "client",
  "client_city",
  "client_country",
  "from",
  "to",
  "responsibilities",
  "role",
  "skills_used",
];
export const updateAndCreateValidator = (req, res, next) => {
  haveNoMaliciousField(Object.keys(req.body), allowedUpdateFields);
  if (req.body.nationality) {
    isAlphabets(req.body.nationality, "Nationality");
  }
  if (req.body.company_country) {
    isAlphabetsWithOptionalSpaces(req.body.company_country, "Company Country");
  }
  if (req.body.company_city) {
    isAlphabetsWithOptionalSpaces(req.body.company_city, "Company City");
  }
  if (req.body.client_country) {
    isAlphabetsWithOptionalSpaces(req.body.client_country, "Client Country");
  }
  if (req.body.client_city) {
    isAlphabetsWithOptionalSpaces(req.body.client_city, "Client City");
  }
  next();
};
