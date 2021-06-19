import { NotFoundError } from '../error_handling/userFacingErrors';
import _My_Client_Projects from '../models/client_projects';

export const getMyClientProjects = async () => {
	const myClientProjects = await _My_Client_Projects.find().populate(['client', 'stack', 'other']);
	if (!myClientProjects)
		throw new NotFoundError(
			'Could Not Find The Client Projects I Have Worked On Data At The Moment'
		);
	return myClientProjects;
};
export const updateMyClientProject = async (updateObject) => {
	const myClientProject = await _My_Client_Projects.findById(
		updateObject.client_project_id
	);
	if (!myClientProject)
		throw new NotFoundError('Could not find client project entry to update', {
			client_project_id: updateObject.client_project_id,
		});
	myClientProject.set(updateObject);
	return await myClientProject.save();
};
export const createMyClientProject = async (createObj) => {
	const myClientProject = new _My_Client_Projects(createObj);
	return await myClientProject.save();
};
