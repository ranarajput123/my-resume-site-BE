import { Router } from 'express';
import {
	visitorSignIn,
	visitorSignUp,
	getVisitorByID,
	updateVisitorByID,
	getAll,
} from '../controllers/Visitor';
import { COOKIE_TYPE, RETURN_CODE } from '../utils/constants';
import { ReC_Continue, ReS } from '../utils/response';
import {
	signInValidator,
	signUpValidator,
	updateValidator,
} from '../utils/validation/visitor';
import { withAuth } from '../utils/middlewares/authentication';
import { hasPermission } from '../utils/middlewares/permissions';
import * as rolesAndPermissions from '../roles_permissions/roles';
const router = Router();

router.post('/signup', signUpValidator, async (req, res, next) => {
	const { email, password, name, company } = req.body;
	try {
		const { visitor, token } = await visitorSignUp(
			email,
			password,
			name,
			company
		);
		ReC_Continue(res, COOKIE_TYPE.TOKEN, token, true);
		return ReS(
			res,
			'Visitor Created And Signed In',
			visitor,
			RETURN_CODE.SUCCESS
		);
	} catch (err) {
		next(err);
	}
});

router.post('/signin', signInValidator, async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const { visitor, token } = await visitorSignIn(email, password);
		ReC_Continue(res, COOKIE_TYPE.TOKEN, token, true);
		return ReS(res, 'Visitor Signed In', visitor, RETURN_CODE.SUCCESS);
	} catch (err) {
		next(err);
	}
});

router.get(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.getVisitor),
	async (req, res, next) => {
		try {
			const { id } = req;
			const visitor = await getVisitorByID(id);
			return ReS(res, 'Visitor Profile Fetched', visitor, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);
router.get(
	'/:id',
	withAuth,
	hasPermission(rolesAndPermissions.getVisitorByID),
	async (req, res, next) => {
		try {
			const visitor = await getVisitorByID(req.params.id);
			return ReS(res, 'Visitor Profile Fetched', visitor, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);
router.get(
	'/all',
	withAuth,
	hasPermission(rolesAndPermissions.getAllVisitors),
	async (req, res, next) => {
		try {
			const visitors = await getAll();
			return ReS(res, 'Visitor Profile Fetched', visitors, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);
router.patch(
	'/',
	withAuth,
	hasPermission(rolesAndPermissions.updateVisitor),
	updateValidator,
	async (req, res, next) => {
		try {
			const { id } = req;
			const visitor = await updateVisitorByID(id, req.body);
			return ReS(res, 'Visitor Updated', visitor, RETURN_CODE.SUCCESS);
		} catch (err) {
			next(err);
		}
	}
);

export default router;
