import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import loginUserController from "../controllers/loginUser.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", listUsersController);
userRouter.put("/:id");
userRouter.delete("/:id");

export default userRouter;
