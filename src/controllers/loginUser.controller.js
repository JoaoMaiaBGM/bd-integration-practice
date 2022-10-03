import loginUserService from "../services/users/loginUser.service";

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await loginUserService(email, password);

    return res.status(200).json(login);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default loginUserController;
