import express from "express";
import userRouter from "./routes/users.routes";
import { initDataBase } from "./database";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  initDataBase();
});
