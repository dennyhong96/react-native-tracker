const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No jwt token in headers
    if (!token) {
      throw new Error("Invalid credentials");
    }

    // Decode jwt
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      // Invalid token
      throw new Error("Invalid credentials");
    }

    const user = await User.findById(decoded.id);

    // User deleted
    if (!user) throw new Error("User not found");

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      status: "failed",
      data: { msg: error.message },
    });
  }
};
