import jwt from "jsonwebtoken";

const generateToken = (data) => {
    return jwt.sign(data, "developmentScretKey");
}

export default generateToken;