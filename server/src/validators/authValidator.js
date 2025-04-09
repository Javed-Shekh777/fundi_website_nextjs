const JOI = require("joi");

const registerValidation = JOI.object({
  firstName: JOI.string().min(3).max(30).required().messages({
    "string.empty": "First name is required",
    "string.min": "First name must be at least 3 characters",
    "string.max": "First name must be at least 30 characters",
  }),
  lastName: JOI.string().min(3).max(30).messages({
    "string.min": "Last name must be at least 3 characters",
    "string.max": "First name must be at least 30 characters",
  }),
  email: JOI.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Enter a valid email address",
  }),
  mobile: JOI.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Mobile number must be 10 digits",
      "string.empty": "Mobile number is required",
    }),
  role: JOI.string().valid("fundi", "customer", "admin").required().messages({
    "any.only": "Role must be either fundi or customer",
    "string.empty": "Role is required",
  }),
});

const loginValidation = JOI.object({
  email: JOI.string().required().messages({
    "string.empty": "Email or mobile is required",
  }),
  password: JOI.string().required().messages({
    "string.empty": "Password is required",
  }),
});

module.exports = {
  registerValidation,
  loginValidation,
};
