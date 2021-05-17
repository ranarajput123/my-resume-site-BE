import { NotFoundError } from "../error_handling/userFacingErrors";
import _My_WorkExperience from "../models/my-work_experiences";

export const getMyWorkExperience = async () => {
  const myWorkExperience = await _My_WorkExperience.findOne();
  if (!myWorkExperience)
    throw new NotFoundError(
      "Could Not Find Work Experience Data At The Moment"
    );
  return myWorkExperience;
};
export const updateMyWorkExperience = async (updateObject) => {
  const myWorkExperience = await getMyWorkExperience()
  myWorkExperience.experiences.push(updateObject);
  return await myWorkExperience.save();
};
export const createMyWorkExperience = async (createObj) => {
  const myWorkExperience = new _My_WorkExperience({experiences:[createObj]});
  await _My_WorkExperience.deleteMany({ id: { $ne: myWorkExperience._id } });
  return await myWorkExperience.save();
};
