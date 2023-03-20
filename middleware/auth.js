const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;
console.log(JWT_KEY)
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["token"];
  console.log(token)
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log(JWT_KEY)
    const decoded = jwt.verify(token, JWT_KEY);
    console.log(decoded);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
