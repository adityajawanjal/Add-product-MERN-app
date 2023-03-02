const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtkey = "E-CommerceWebsiteToken";

exports.verifyToken = async (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, jwtkey, (err, valid) => {
      if (err) {
        console.log(err);
      } else {
        console.log(valid);
        next();
      }
    });
  } else {
    console.log("error");
  }
};

exports.signupUser = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.status(403).json("User already Exists !");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      let result = await user.save();
      result = result.toObject();
      delete result.password;
      const token = jwt.sign({ result }, jwtkey, { expiresIn: "1d" });
      res.status(200).json({ result, token: token });
    }
  } catch (err) {
    res.status(403).json(`The error in signupUser is : ${err}`);
  }
};
exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const passwordMatched = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordMatched) {
        const token = jwt.sign({ user }, jwtkey, { expiresIn: "1d" });
        res.status(200).json({
          name: user.name,
          email: user.email,
          _id: user._id,
          token: token,
        });
      } else {
        res.status(403).json("Incorrect Password.");
      }
    } else {
      res.status(200).json("no user");
    }
  } catch (err) {
    res.status(403).json(`The error in loginUser is : ${err}`);
  }
};
