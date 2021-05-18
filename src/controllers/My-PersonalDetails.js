import { NotFoundError } from '../error_handling/userFacingErrors';
import _My_PersonalDetails from '../models/my-personalDetails';

export const getMyPersonalDetails = async () => {
	const myPersonalDetails = await _My_PersonalDetails.findOne();
	if (!myPersonalDetails)
		throw new NotFoundError(
			'Could Not Find Personal Details Data At The Moment'
		);
	return myPersonalDetails;
};
export const updateMyPersonalDetails = async (updateObject) => {
	const myPersonalDetails = await getMyPersonalDetails();
	myPersonalDetails.set(updateObject);
	return await myPersonalDetails.save();
};
export const createMyPersonalDetails = async (createObj) => {
	const myPersonalDetails = new _My_PersonalDetails(createObj);
	await _My_PersonalDetails.deleteMany({ id: { $ne: myPersonalDetails._id } });
	return await myPersonalDetails.save();
};
