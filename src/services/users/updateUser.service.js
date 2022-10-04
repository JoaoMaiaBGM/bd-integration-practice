import database from "../../database/";

const updateUserService = async (id, user) => {
  try {
    if (user.id) {
      delete user["id"];
    }

    let query = "UPDATE users SET ";

    const keys = Object.keys(user);
    const values = Object.values(user);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const response = await database.query(query, [...values, id]);

    if (response.rows.length === 0) {
      throw new Error("User not found");
    }
    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateUserService;
