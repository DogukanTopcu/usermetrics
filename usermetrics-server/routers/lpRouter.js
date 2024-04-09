import express from "express";
import { saveEmail, verifyEmail, shareEmail, getCount } from "../controllers/lpController.js";

import { rateLimit } from "express-rate-limit";

const emailLimiter = rateLimit({
  windowMs: 2000,
  limit: 1,
});

const landingPageRouter = express.Router();

landingPageRouter.post("/save", emailLimiter, saveEmail);
landingPageRouter.post("/verify", emailLimiter, verifyEmail);
landingPageRouter.post("/share", shareEmail);
landingPageRouter.get("/waitlist", getCount);

export default landingPageRouter;