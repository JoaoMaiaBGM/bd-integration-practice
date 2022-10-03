import createUserService from "../services/users/createUser.service";

const createUserController = async (req, res) => {
  const { email, name, password } = req.body;

  const user = await createUserService(email, name, password);

  return res.status(201).json(user);
};

export default createUserController;
