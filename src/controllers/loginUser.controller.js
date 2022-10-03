import loginUserService from "../services/users/loginUser.service";

const loginUserController = (req, res) => {
  const { email, password } = req.body;

  const login = loginUserService(email, password);

  return res.status(200).json(login);
};

export default loginUserController;
