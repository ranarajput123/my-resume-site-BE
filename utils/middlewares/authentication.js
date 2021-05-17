import { ReE } from "../response";
import { RETURN_CODE } from "../constants";

const jwt = require("jsonwebtoken");

const withAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    console.log("here");
    ReE(res, "Unauthorized: No token provided", null, RETURN_CODE.UNAUTHORISED);
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        ReE(res, "Unauthorized: Invalid token", null, RETURN_CODE.UNAUTHORISED);
      } else {
        req.id = decoded.id;
        req.email = decoded.email;
        req.name = decoded.name;
        next();
      }
    });
  }
};

export { withAuth };
