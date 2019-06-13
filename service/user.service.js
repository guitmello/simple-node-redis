const redisClient = require("./../redis");

// Search User
function searchUser(req, res) {
	let id = req.body.id;

	redisClient.hgetall(id, (err, obj) => {
		if (!obj) {
			res.render("searchUsers", {
				error: "Users does not exist",
			});
		} else {
			obj.id = id;
			res.render("details", {
				user: obj,
			});
		}
	});
}

// Add User
function addUser(req, res) {
	let { id, first_name, last_name, email, phone } = req.body;

	redisClient.hmset(
		id,
		[
			"first_name",
			first_name,
			"last_name",
			last_name,
			"email",
			email,
			"phone",
			phone,
		],
		(err, reply) => {
			if (err) {
				console.log(err);
			} else {
				console.log(reply);
				res.redirect("/");
			}
		},
	);
}

// Delete User
function deleteUser(req, res) {
	redisClient.del(req.params.id);
	res.redirect("/");
}

module.exports = {
	searchUser,
	addUser,
	deleteUser,
};
