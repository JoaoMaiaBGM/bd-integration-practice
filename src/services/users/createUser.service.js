import database from "../../database";
import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserService = async (name, email, password) => {
  try {
    const hashedPassword = await bycrypt.hash(password, 10); //função hash do bcrypt retorna uma promise, por isso o await
    const response = await database.query(
      `
      INSERT INTO
	      users (name, email, pwd)
      VALUES 
        ($1, $2, $3)
      RETURNING *;
      `,
      [name, email, hashedPassword]
    );
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default createUserService;
