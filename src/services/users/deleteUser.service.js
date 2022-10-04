import database from "../../database";

const deleteUserService = async (id) => {
  try {
    const response = database.query(
      `
        DELETE FROM 
          users
        WHERE
          id = $1
        RETURNING *;
      `,
      [id]
    );

    if (response.rows === 0) {
      throw new Error("User not found");
    }

    return { message: "user deleted" };
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteUserService;
