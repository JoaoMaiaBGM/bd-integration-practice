import updateUserService from "../services/users/updateUser.service";

const updateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;

    const updateUser = await updateUserService(id, user);

    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateUserController;
