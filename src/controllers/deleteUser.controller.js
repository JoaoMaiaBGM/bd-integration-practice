import deleteUserService from "../services/users/deleteUser.service";

const deleteUserControler = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await deleteUserService(id);

    return res.status(204).json({
      message: "User deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteUserControler;
