import { Router } from "express";
import {
    createMyPersonalDetails,
  getMyPersonalDetails,
  updateMyPersonalDetails
} from "../controllers/My-PersonalDetails";
import { RETURN_CODE } from "../utils/constants";
import { withAuth } from "../utils/middlewares/authentication";
import { ReS } from "../utils/response";
import {updateValidator} from '../utils/validation/myPersonalDetails'
const router = Router();

router.get("/",withAuth, async (req, res, next) => {
  try {
    const  myPDs = await getMyPersonalDetails();
    return ReS(
      res,
      "Sarmad's Personal Details Fetched",
      myPDs,
      RETURN_CODE.SUCCESS
    );
  } catch (err) {
    next(err);
  }
});
router.patch("/", withAuth, updateValidator, async (req, res, next) => {
    try {
      const myPersonalDetails = await updateMyPersonalDetails(req.body)
      return ReS(res, "Sarmad's Personal Details Updated", myPersonalDetails, RETURN_CODE.SUCCESS);
    } catch (err) {
      next(err);
    }
  });

router.post('/',withAuth,async (req,res,next)=>{
    try{
        const myPersonalDetails = await createMyPersonalDetails(req.body)
        return ReS(res,'Sarmad Personal Details Created and Replaced',myPersonalDetails,RETURN_CODE.SUCCESS)
    }catch(err){
        next(err)
    }
})


export default router;
