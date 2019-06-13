const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const routes = require("./routes");

const port = 3000;

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use("", routes);

app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
