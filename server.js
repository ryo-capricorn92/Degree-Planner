//Potential Improvements:
//////Semesters
//////grade after pop up form when click completed
//////credit hours
//////multiple degree plans
//////multiple students-?
//nicer index page
//move buttons closer together
//percent completed bar, possibly with numerical percent


var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/courses_controller.js");

app.use("/", routes);
app.listen(port, function() {
	console.log("Listening on " + port);
});
