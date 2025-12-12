//Check if token is coming woth request object
// Check if it is valid token
// If token is valid extract id from token
// use that id to search user in db
// if user found then run next() to allow authentication
//  if anything fails that means unauthorized access
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const adminProtect = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer"))
      return res.status(401).json({ message: "Unauthorized: No Token" });

    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) return res.status(401).json({ message: "Invalid Token User" });

    if (!user.isAdmin)
      return res.status(403).json({ message: "Access Denied: Admin Only" });

    req.user = user;
    next();

  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Token" });
  }
};

module.exports = adminProtect;
