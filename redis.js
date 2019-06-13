const redis = require("redis");

let client = redis.createClient();

client.on("connect", () => {
	console.log("Connected to Redis");
});

module.exports = client;
