import database from "../../database";
import users from "../../database";

const listUsersService = async () => {
  try {
    const response = await database.query(
      `SELECT 
        *
      FROM 
        users
      `,
      []
    );

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }

  return users;
};

export default listUsersService;
