import { Router } from "express";
import * as controllers from "../controllers/Contact";
import { RETURN_CODE } from "../utils/constants";
import { withAuth } from "../utils/middlewares/authentication";
import { ReS } from "../utils/response";
import { updateValidator, createValidator } from "../utils/validation/contact";
import * as rolesAndPermissions from "../roles_permissions/roles";
import { hasPermission } from "../utils/middlewares/permissions";
const router = Router();

router.get(
  "/",
  withAuth,
  hasPermission(rolesAndPermissions.getContacts),
  async (req, res, next) => {
    try {
      const myContactsDetail = await controllers.getMyContactDetails();
      return ReS(
        res,
        "Sarmad's Contact Details Fetched",
        myContactsDetail,
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
  hasPermission(rolesAndPermissions.updateContact),
  updateValidator,
  async (req, res, next) => {
    try {
      const contactDetail = await controllers.updateMyContactDetails(req.body);
      return ReS(
        res,
        "Sarmad's Contact detail Updated",
        contactDetail,
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
  hasPermission(rolesAndPermissions.createContact),
  createValidator,
  async (req, res, next) => {
    try {
      const myContactDetail = await controllers.createMyContact(req.body);
      return ReS(
        res,
        "Sarmad Contact Detail Created ",
        myContactDetail,
        RETURN_CODE.SUCCESS
      );
    } catch (err) {
      next(err);
    }
  }
);

export default router;
