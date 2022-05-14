const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  getUserId,
  getUser,
  changePassword,
} = require("../Controllers/UserController");
const auth = require("../Middleware/auth.js");

router.route("/").get(auth, getUsers).post(addUser);

router
  .route("/:id")
  .delete(auth, deleteUser)
  .patch(auth, updateUser)
  .get(auth, getUser);

router.route("/reset-password/:id").patch(auth, changePassword);

router.route("/login").post(getUserId);

module.exports = router;
