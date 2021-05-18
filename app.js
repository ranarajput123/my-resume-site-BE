import express from "express";
import "./database/mongo";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import * as routes from "./routes";
import handleErrors from "./utils/error-handling/errorHandler";
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(helmet());
app.get("/", (req, res) => res.send({ message: "WORKING" }));

app.use("/visitor", routes.visitorRoutes);
app.use("/my-personal-details", routes.myPersonalDetailsRoutes);
app.use("/my-work-experiences", routes.myWorkExperienceRoutes);
app.use("/my-clients", routes.myClientRoutes);
app.use("/my-client-projects", routes.myClientProjectsRoutes);
app.use("/my-skills", routes.mySkillsRoutes);
app.use("/my-contact-details", routes.myContactDetailsRoutes);

// Error Handler
app.use(handleErrors);

export default app;

// TODO role autherization for routes according to roles
// TODO cast error for mongoose models when wrong type data given ex string when array of string expected
