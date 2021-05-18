import {
  haveNoMaliciousField,
  isAlphabetsWithOptionalSpaces,
  isNotEmpty,
  isObjectId,
  isURL,
} from "./generalValidations";

const allowedFields = ["contact_type", "contact_url", "logo_url"];
export const updateValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { contact_type, contact_url, logo_url, contact_id } = req.body;
  isNotEmpty("Contact Reference ID", contact_id);
  isObjectId(contact_id);
  if (contact_type) isAlphabetsWithOptionalSpaces(contact_type, "Contact Type");
  if (contact_url) isURL(contact_url, "Contact URL");
  if (logo_url) isURL(logo_url, "Logo URL");
  next();
};
export const createValidator = (req, res, next) => {
  haveNoMaliciousField(req.body, allowedFields);
  const { contact_type, contact_url, logo_url } = req.body;
  isNotEmpty("Contact Type", contact_type);
  isAlphabetsWithOptionalSpaces(contact_type, "Contact Type");
  isNotEmpty("Contact URL", contact_url);
  isURL(contact_url, "Contact URL");
  isNotEmpty("LOGO URL", logo_url);
  isURL(logo_url, "Logo URL");
  next();
};
