import express from "express";
import { rateLimit } from "express-rate-limit";
// import { googleOauth, loadUserWithAccessToken, loginDefault, register } from "../controllers/user.controller.js";

const userRouter = express.Router();

const limiter = rateLimit({
    windowMs: 2000,
    limit: 1,
  });

/* Authentication */
// userRouter.post("/login", limiter, loginDefault);
// userRouter.post("/register", limiter, register);
// userRouter.post("/googleOauth", limiter, googleOauth);
// userRouter.post("/loadUserWithAccessToken", loadUserWithAccessToken);

// userRouter.post("/exit", limiter, exit);



/* Authorization */ 



/* UPDATE USER */





export default userRouter;