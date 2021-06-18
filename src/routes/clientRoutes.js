import { Router } from 'express';
import * as controllers from '../controllers/Clients';
import { RETURN_CODE } from '../utils/constants';
import { withAuth } from '../utils/middlewares/authentication';
import { ReS } from '../utils/response';
import { updateValidator, createValidator } from '../utils/validation/clients';
import * as rolesAndPermissions from '../roles_permissions/roles';
import { hasPermission } from '../utils/middlewares/permissions';
const router = Router();

router.get(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.getClients),
	async (req, res, next) => {
		try {
			const myClients = await controllers.getMyClients();
			return ReS(
				res,
				'Sarmad\'s Clients Fetched',
				myClients,
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
	hasPermission(rolesAndPermissions.updateClient),
	updateValidator,
	async (req, res, next) => {
		try {
			const myClient = await controllers.updateMyClient(req.body);
			return ReS(res, 'Sarmad\'s Client Updated', myClient, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);

router.post(
	'/',
	withAuth,
	// hasPermission(rolesAndPermissions.createClient),
	createValidator,
	async (req, res, next) => {
		try {
			const myClient = await controllers.createMyClient(req.body);
			return ReS(res, 'Sarmad Client Created ', myClient, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);

export default router;
