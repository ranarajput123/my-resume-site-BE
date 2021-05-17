import { Router } from "express";
import * as controllers from "../controllers/My-WorkExperience";
import { RETURN_CODE } from "../utils/constants";
import { withAuth } from "../utils/middlewares/authentication";
import { ReS } from "../utils/response";
import { updateAndCreateValidator } from "../utils/validation/myWorkExperience";
const router = Router();

router.get("/", withAuth, async (req, res, next) => {
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
});
router.patch("/", withAuth,updateAndCreateValidator, async (req, res, next) => {
  try {
    const myWEs = await controllers.updateMyWorkExperience(req.body);
    return ReS(
      res,
      "Sarmad's Work Experience Updated",
      myWEs,
      RETURN_CODE.SUCCESS
    );
  } catch (err) {
    next(err);
  }
});

router.post("/", withAuth,updateAndCreateValidator, async (req, res, next) => {
  try {
    const myWEs = await controllers.createMyWorkExperience(req.body);
    return ReS(
      res,
      "Sarmad Work Experiences Array Created and Replaced",
      myWEs,
      RETURN_CODE.SUCCESS
    );
  } catch (err) {
    next(err);
  }
});

export default router;
