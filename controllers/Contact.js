import { NotFoundError } from "../error_handling/userFacingErrors";
import _My_Contact_Details from "../models/contact";

export const getMyContactDetails = async () => {
  const myContactDetails = await _My_ContactDetails.find();
  if (!myContactDetails)
    throw new NotFoundError("Could Not Find My Contact Data At The Moment");
  return myContactDetails;
};
export const updateMyContactDetails = async (updateObject) => {
  const myContact = await _My_Contact_Details.findById(updateObject.contact_id);
  if (!myContact)
    throw new NotFoundError("Could not find contact entry to update", {
      contact_id: updateObject.contact_id,
    });
  myContact.set(updateObject);
  return await myContact.save();
};
export const createMyContact = async (createObj) => {
  const myContact = new _My_Contact_Details(createObj);
  return await myContact.save();
};
