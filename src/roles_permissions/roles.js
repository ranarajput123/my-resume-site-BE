export const allPermissions = 'ALL';

export const createVisitor = 'CREATE_VISITOR';
export const updateVisitor = 'UPDATE_VISITOR';
export const deleteVisitor = 'DELETE_VISITOR';
export const getVisitor = 'GET_VISITOR';
export const getAllVisitors = 'GET_ALL_VISITORS';
export const getVisitorByID = 'GET_VISITOR_BY_ID';

export const createPersonalDetails = 'CREATE_PERSONAL_DETAILS';
export const updatePersonalDetails = 'UPDATE_PERSONAL_DETAILs';
export const deletePersonalDetails = 'DELETE_PERSONAL_DETAILS';
export const getPersonalDetails = 'GET_PERSONAL_DETAILS';

export const createSkill = 'CREATE_SKILL';
export const updateSkill = 'UPDATE_SKILL';
export const deleteSkill = 'DELETE_SKILL';
export const getSkills = 'GET_SKILLS';

export const createClientProject = 'CREATE_CLIENT_PROJECT';
export const updateClientProject = 'UPDATE_CLIENT_PROJECT';
export const deleteClientProject = 'DELETE_CLIENT_PROJECT';
export const getClientProject = 'GET_CLIENT_PROJECTS';

export const createContact = 'CREATE_CONTACT';
export const updateContact = 'UPDATE_CONTACT';
export const deleteContact = 'DELETE_CONTACT';
export const getContacts = 'GET_CONTACTS';

export const createClient = 'CREATE_CLIENT';
export const updateClient = 'UPDATE_CLIENT';
export const deleteClient = 'DELETE_CLIENT';
export const getClients = 'GET_CLIENTS';

export const createWorkExperience = 'CREATE_WORK_EXPERIENCE';
export const updateWorkExperience = 'UPDATE_WORK_EXPERIENCE';
export const deleteWorkExperience = 'DELETE_WORK_EXPERIENCE';
export const getWorkExperiences = 'GET_WORK_EXPERIENCES';

export const permissions = {
	ADMIN: {
		permissions: [allPermissions],
	},
	VISITOR: {
		permissions: [getVisitor, updateVisitor, deleteVisitor],
	},
};
export const roles = {
	ADMIN: 'ADMIN',
	VISITOR: 'VISITOR',
};
