const {
  loginValidation,
  registerValidation,
} = require("../validators/authValidator");
const ErrorResponse = require("../utils/ErrorResponse");
const UserModel = require("../models/userModel");
const { ENV } = require("../constants");

const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { error } = registerValidation.validate(req.body);

    if (error) {
      return next(new ErrorResponse(error.details[0].message, 400));
    }

    const { email, mobile } = req.body;

    // Is user Exist
    const existUser = await UserModel.findOne({ $or: [{ email }, { mobile }] });

    if (existUser) {
      return next(new ErrorResponse("Email or Mobile already registered", 409));
    }

    // Creating new User
    const newUser = await UserModel.create(req.body);

    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { error } = loginValidation.validate(req.body);

    if (error) {
      return next(new ErrorResponse(error.details[0].message, 400));
    }

    const { email, password } = req.body;
    const existUser = await UserModel.findOne({
        $or: [{ email }, { mobile: email }],
      });
      

    if (!existUser) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await existUser.isPasswordCorrect(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const tokens =await existUser.generateToken();

    const options = {
      httpOnly: true,
      secure: ENV === "production",
    };

    return res
      .status(200)
      .cookie("accessToken", tokens?.accessToken, options)
      .cookie("refreshToken", tokens?.refreshToken, options)
      .json({
        success: true,
        message: "Login successful",
        data: {
          user: existUser,
          tokens,
        },
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
