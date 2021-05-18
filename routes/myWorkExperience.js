import { Router } from "express";
import * as controllers from "../controllers/My-WorkExperience";
import { RETURN_CODE } from "../utils/constants";
import { withAuth } from "../utils/middlewares/authentication";
import { ReS } from "../utils/response";
import {
  updateValidator,
  createValidator,
} from "../utils/validation/myWorkExperience";
import * as rolesAndPermissions from "../roles_permissions/roles";
import { hasPermission } from "../utils/middlewares/permissions";
const router = Router();

router.get(
  "/",
  withAuth,
  hasPermission(rolesAndPermissions.getWorkExperiences),
  async (req, res, next) => {
    try {
      const myWEs = await controllers.getMyWorkExperience();
      return ReS(
        res,
        "Sarmad's Work Experience Fetched",
        myWEs,
        RETURN_CODE.SUCCESS
      );
    } catch (err) {
      next(err);
    }
  }
);
router.patch(
  "/",
  withAuth,
  hasPermission(rolesAndPermissions.updateWorkExperience),
  updateValidator,
  async (req, res, next) => {
    try {
      const myWE = await controllers.updateMyWorkExperience(req.body);
      return ReS(
        res,
        "Sarmad's Work Experience Updated",
        myWE,
        RETURN_CODE.SUCCESS
      );
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/",
  withAuth,
  hasPermission(rolesAndPermissions.createWorkExperience),
  createValidator,
  async (req, res, next) => {
    try {
      const myWEs = await controllers.createMyWorkExperience(req.body);
      return ReS(
        res,
        "Sarmad Work Experience Created ",
        myWEs,
        RETURN_CODE.SUCCESS
      );
    } catch (err) {
      next(err);
    }
  }
);

export default router;
