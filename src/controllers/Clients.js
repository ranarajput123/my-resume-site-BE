import { NotFoundError } from '../error_handling/userFacingErrors';
import _My_Clients from '../models/clients';

export const getMyClients = async () => {
	const myClients = await _My_Clients.find();
	if (!myClients)
		throw new NotFoundError(
			'Could Not Find The Clients I Have Worked With Data At The Moment'
		);
	return myClients;
};
export const updateMyClient = async (updateObject) => {
	const myClient = await _My_Clients.findById(updateObject.client_id);
	if (!myClient)
		throw new NotFoundError('Could not find client entry to update', {
			client_id: updateObject.client_id,
		});
	myClient.set(updateObject);
	return await myClient.save();
};
export const createMyClient = async (createObj) => {
	const myClient = new _My_Clients(createObj);
	return await myClient.save();
};
