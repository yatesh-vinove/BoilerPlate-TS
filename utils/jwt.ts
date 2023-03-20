import jwt from "jsonwebtoken";

export const jwtOps = {
  generateJWT: function (id:string) {
    
    var token = jwt.sign({ userId: id }, process.env.JWT_KEY, {
      expiresIn: '1d',
    });
    return token;
  },
};
