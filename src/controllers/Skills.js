import { NotFoundError } from '../error_handling/userFacingErrors';
import _My_Skill from '../models/skills';

export const getMySkills = async () => {
	const mySkills = await _My_Skill.find();
	if (!mySkills)
		throw new NotFoundError(
			'Could Not Find Skill Data At The Moment'
		);
	return mySkills;
};
export const updateMySkill = async (updateObject) => {
	const mySkill = await _My_Skill.findById(updateObject.skill_id);
	if (!mySkill)
		throw new NotFoundError('Could not find the skill entry to update', {
			skill_id: updateObject.skill_id,
		});
	mySkill.set(updateObject);
	return await mySkill.save();
};
export const createMySkill = async (createObj) => {
	const mySkill = new _My_Skill(createObj);
	return await mySkill.save();
};
