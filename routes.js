const express = require("express");
const router = express.Router();
const usersService = require("./service/user.service");

// Home page
router.get("/", (req, res) => {
	res.render("searchUsers");
});

// Get User page
router.get("/user/add", (req, res) => {
	res.render("addUser");
});

// Search User
router.post("/user/search", (req, res) => {
	usersService.searchUser(req, res);
});

// Add User
router.post("/user/add", (req, res) => {
	usersService.addUser(req, res);
});

// Delete User
router.delete("/user/delete/:id", (req, res) => {
	usersService.deleteUser(req, res);
});

module.exports = router;
