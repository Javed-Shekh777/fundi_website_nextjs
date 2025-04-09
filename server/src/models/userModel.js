const mongoose = require("mongoose");
const { modelsNames, Tokens } = require("../constants");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Small Object for imageSchema
const imageSchema = {
  publicId: { type: String },
  url: { type: String },
};

const userSchema = new mongoose.Schema(
  {
    accressToken: { type: String },
    refreshToken: { type: String },
    isBlocked: { type: Boolean, default: false },
    lastLogin: { type: Date },
    authProvider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
    },

    role: {
      type: String,
      enum: ["fundi", "customer", "admin"],
      required: [true, "Role is required."],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    mobile: {
      type: String,
      match: [/^\d{10}$/, "Invalid mobile number"],
      unique: [true, "Mobile no should be unique."],
      required: [true, "Mobile no is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email id is required."],
      unique: [true, "Email id should be unique."],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    profileImage: imageSchema,
    aboutMe: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
    },
    country: { type: String },
    zipCode: {
      type: String,
    },
    privacyNotification: {
      type: Boolean,
      default: true,
    },
    reasonToDeactivate: {
      type: String,
      default: "",
    },
    isDeactivated: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    balanceInAccount: {
      type: Number,
      default: 0,
    },
    pendingInWallet: { type: Number, default: 0 },
    holdInWallet: { type: Number, default: 0 },

    balanceInWallet: { type: Number, default: 0 },
    totalJobs: {
      type: Number,
      default: 0,
    },
    activeJobs: {
      type: Number,
      default: 0,
    },
    pastJobs: {
      type: Number,
      default: 0,
    },
    paymentHistory: [
      {
        amount: Number,
        paymentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: modelsNames.payment,
        },
        status: {
          type: String,
          enum: ["pending", "success", "failed"],
          default: "pending",
        },
        date: { type: Date, default: Date.now },
      },
    ],

    // Fundi Fields
    service: {
      type: String,
    },
    subService: {
      type: String,
    },
    experience: { type: String, default: "Fresher" },
    totalEarn: { type: Number, default: 0 },
    idProof: imageSchema,
    certification: imageSchema,
    subscriptionPackage: {
      type: String,
      enum: ["standard", "economyextended", "gold"],
    },
    // Customer Specific Fields
    totalSpent: { type: Number, default: 0 },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: modelsNames.jobs }],
  },

  { timestamps: true }
);


userSchema.pre("save", async function (next) {
  try {
    if (this.isModified(this.password)) {
      this.password = await bcrypt.hash(this.password, process.env.SALT);
    }
    next();
  } catch (err) {
    next(err); // not ErrorResponse
  }
});

userSchema.methods.generateToken = async function () {
  const refreshToken = JWT.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: Tokens.REFRESH_TOKEN_EXPIRY,
    }
  );

  const accessToken = JWT.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: Tokens.ACCESS_TOKEN_EXPIRY,
    }
  );

  return { accessToken, refreshToken };
};

userSchema.methods.isPasswordCorrect = async function (password) {
  const isCorrect = await bcrypt.compare(password, this.password);
  return isCorrect;
};

const userModel =
  mongoose.models[modelsNames.user] ||
  mongoose.model(modelsNames.user, userSchema);

 
module.exports = userModel;
