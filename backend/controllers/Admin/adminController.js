const Admin = require('../../models/adminModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// login admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.login(email, password);

    // create a token
    const token = createToken(admin._id);

    const fullName = admin.fullName;
    const _id = admin._id;

    res.status(200).json({ _id, fullName, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupAdmin = async (req, res) => {
  const { _id, firstName, lastName, email, password, displayPic } = req.body;

  try {
    const user = await User.signup(
      _id,
      firstName,
      lastName,
      email,
      password,
      displayPic
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ _id, firstName, lastName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupAdmin,
  loginAdmin,
};
