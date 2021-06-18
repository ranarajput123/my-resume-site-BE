import { PERMISSIONS, allPermissions } from '../../roles_permissions/roles';
import { ForbiddenError } from '../../error_handling/userFacingErrors';
export const hasPermission = (resource_requested_permission) => {
	return (req, res, next) => {
		if (
			PERMISSIONS[req.role].permissions.includes(allPermissions) ||
			PERMISSIONS[req.role].permissions.includes(resource_requested_permission)
		)
			next();
		else
			throw new ForbiddenError(
				`You dont have permission to access this resource <${resource_requested_permission}>`
			);
	};
};
