import { Router } from "express";

const userRouter = Router();

userRouter.post("");
userRouter.post("/login");
userRouter.get("");
userRouter.put("/:id");
userRouter.delete("/:id");

export default userRouter;
