import { Router } from 'express';
import * as controllers from '../controllers/Skills';
import { RETURN_CODE } from '../utils/constants';
import { withAuth } from '../utils/middlewares/authentication';
import { hasPermission } from '../utils/middlewares/permissions';
import { ReS } from '../utils/response';
import { updateValidator, createValidator } from '../utils/validation/skills';
import * as rolesAndPermissions from '../roles_permissions/roles';
const router = Router();

router.get('/', withAuth, hasPermission(rolesAndPermissions.getSkills), async (req, res, next) => {
	try {
		const mySkills = await controllers.getMySkills();
		return ReS(res, 'Sarmad\'s Skills Fetched', mySkills, RETURN_CODE.SUCCESS);
	} catch (err) {
		next(err);
	}
});
router.patch('/', withAuth, hasPermission(rolesAndPermissions.updateSkill), updateValidator, async (req, res, next) => {
	try {
		const mySkill = await controllers.updateMySkill(req.body);
		return ReS(res, 'Sarmad\'s Skill Updated', mySkill, RETURN_CODE.SUCCESS);
	} catch (err) {
		next(err);
	}
});

router.post('/', withAuth, hasPermission(rolesAndPermissions.createSkill), createValidator, async (req, res, next) => {
	try {
		const mySkill = await controllers.createMySkill(req.body);
		return ReS(res, 'Sarmad Skill Created ', mySkill, RETURN_CODE.SUCCESS);
	} catch (err) {
		next(err);
	}
});

export default router;
