import "dotenv/config";
import jwt from "jsonwebtoken";
import * as bycrypt from "bcryptjs";
import database from "../../database";

const loginUserService = async (email, password) => {
  try {
    const response = await database.query(
      `
      SELECT 
        *
      FROM 
        users u 
      WHERE 
        email = $1;
      `,
      [email]
    );

    const user = response.rows[0];

    if (!user) {
      return "Email ou senha inválidos";
    }

    const passwordMatch = bycrypt.compareSync(password, user.pwd);

    if (!passwordMatch) {
      return "Email ou senha inválidos";
    }

    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    return { token };
  } catch (error) {
    throw new Error(error);
  }
};

export default loginUserService;
