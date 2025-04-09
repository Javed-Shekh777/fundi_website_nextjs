const router = require("express").Router();
const {
  login,
  register,
//   getUser,
//   getUsers,
//   updateUser,
//   deleteUser,
} = require("../controllers/userController");

const { verifyToken } = require("../middlewares/authMiddleware");

// Unsecured Routes
router.post("/register", register);
router.post("/login", login);

// Secured Routes
router.get("/get-user", verifyToken);
router.get("/get-users", verifyToken);
router.post("/update-user", verifyToken);
router.delete("/delete-user", verifyToken);

module.exports = router;
