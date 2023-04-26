import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next({
        status: 400,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // send success response
    return res.status(201).json({
      success: true,
      message: "User created",
      data: newUser,
    });
  } catch (error) {
    return next(error);
  }
};

// export const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       const error = new Error("Invalid credentials");
//       error.status = 401;
//       throw error;
//     }

//     // Check if password is correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       const error = new Error("Invalid credentials");
//       error.status = 401;
//       throw error;
//     }

//     // Create and sign the JWT token
//     const payload = { id: user._id, name: user.name };
//     const token = jwt.sign(payload, process.env.JWT_KEY, {
//       expiresIn: process.env.JWT_EXPIRES_IN,
//     });

//     res.status(200).json({
//       success: true,
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }

    // Create and sign the JWT token
    const payload = { id: user._id, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Store user ID in session
    req.session.userId = user._id;

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    next(error);
  }
};
