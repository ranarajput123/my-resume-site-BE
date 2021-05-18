import { NotFoundError } from "../error_handling/userFacingErrors";
import _My_WorkExperience from "../models/my-work_experiences";

export const getMyWorkExperience = async () => {
  const myWorkExperience = await _My_WorkExperience.find();
  if (!myWorkExperience)
    throw new NotFoundError(
      "Could Not Find Work Experience Data At The Moment"
    );
  return myWorkExperience;
};
export const updateMyWorkExperience = async (updateObject) => {
  const myWorkExperience = await _My_WorkExperience.findById(updateObject.work_experience_id);
  if(!myWorkExperience) throw new NotFoundError('Could not find work experience entry to update',{we_id:updateObject.work_experience_id})
  myWorkExperience.set(updateObject)
  return await myWorkExperience.save();
};
export const createMyWorkExperience = async (createObj) => {
  const myWorkExperience = new _My_WorkExperience(createObj);
  return await myWorkExperience.save();
};
