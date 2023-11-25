import jwt from "jsonwebtoken";

const generateToken = async (res, id) => {
  const accesToken = jwt.sign({ id }, process.env.JWT_SECRET);
  res.cookie("accesToken", accesToken, {
    httpOnly: true,
  });
  return accesToken; 
};
export { generateToken };