import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserControler from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import loginUserController from "../controllers/loginUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", listUsersController);
userRouter.patch("/:id", /* verifyAuthTokenMiddleware, */ updateUserController);
userRouter.delete("/:id", /* verifyAuthTokenMiddleware, */ deleteUserControler);

export default userRouter;
