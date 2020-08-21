const User = require("../models/User");

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.genJwtToken();
    res.status(201).json({
      status: "success",
      data: { token },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      data: { msg: error.message },
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Missing email or password
    if (!(email && password)) {
      throw new Error("Email and password are required");
    }
    const user = await User.findOne({ email });

    // User not in db
    if (!user) {
      throw new Error("User not found");
    }

    // Passowrd incorrect
    if (!(await user.correctPassword(password))) {
      throw new Error("Invalid credentials");
    }

    const token = user.genJwtToken();
    res.status(200).json({
      status: "success",
      data: { token },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      data: { msg: error.message },
    });
  }
};

exports.loadUser = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json({
    status: "success",
    data: { user },
  });
};
