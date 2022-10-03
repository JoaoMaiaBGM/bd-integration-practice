import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import loginUserController from "../controllers/loginUser.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("");
userRouter.put("/:id");
userRouter.delete("/:id");

export default userRouter;
