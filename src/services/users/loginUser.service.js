import users from "../../database";
import jwt from "jsonwebtoken";
import * as bycrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return "Email ou senha inválidos";
  }

  const passwordMatch = bycrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválidos";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { token };
};

export default loginUserService;
