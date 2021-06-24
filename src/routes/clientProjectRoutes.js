import { Router } from 'express';
import * as controllers from '../controllers/Client_Porjects';
import { RETURN_CODE } from '../utils/constants';
import { withAuth } from '../utils/middlewares/authentication';
import { ReS } from '../utils/response';
import {
	updateValidator,
	createValidator,
} from '../utils/validation/clientProject';
import * as rolesAndPermissions from '../roles_permissions/roles';
import { hasPermission } from '../utils/middlewares/permissions';
const router = Router();

router.get(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.getClientProject),
	async (req, res, next) => {
		try {
			const myClientProjects = await controllers.getMyClientProjects();
			return ReS(
				res,
				'Sarmad\'s Client Projects Fetched',
				myClientProjects,
				RETURN_CODE.SUCCESS
			);
		} catch (err) {
			next(err);
		}
	}
);
router.patch(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.updateClientProject),
	updateValidator,
	async (req, res, next) => {
		try {
			const clientProject = await controllers.updateMyClientProject(req.body);
			return ReS(
				res,
				'Sarmad\'s Client Project Updated',
				clientProject,
				RETURN_CODE.SUCCESS
			);
		} catch (err) {
			next(err);
		}
	}
);

router.post(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.createClientProject),
	createValidator,
	async (req, res, next) => {
		try {
			const myClientProject = await controllers.createMyClientProject(req.body);
			return ReS(
				res,
				'Sarmad Client Project Created ',
				myClientProject,
				RETURN_CODE.SUCCESS
			);
		} catch (err) {
			next(err);
		}
	}
);

export default router;
