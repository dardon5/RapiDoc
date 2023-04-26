import User from "../models/User.js";

// export const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       success: true,
//       data: users,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// export const deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: "User not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: {},
//     });
//   } catch (error) {
//     next(error);
//   }
// };
