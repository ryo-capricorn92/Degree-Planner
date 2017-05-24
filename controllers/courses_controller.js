
var express = require("express");
var courses = require("../models/courses.js");

var router = express.Router();

router.get("/", function(req, res) {
    courses.selectAll(function(data) {
        var courseData = {
            courses: data
        };
        res.render("index", courseData);
    });
});

router.post("/", function(req, res) {
    if (req.body.semester.toLowerCase() === "spring") {
        var semesterCode = 1;
    }
    else if (req.body.semester.toLowerCase() === "fall") {
        var semesterCode = 3;
    }
    else if (req.body.semester.toLowerCase() === "summer") {
        var semesterCode = 2;
    }
    //'return' here so doesn't run code that follows after rendering 400
    else {
        res.render("400");
        return;
    };
    var semester = req.body.year + semesterCode;
    if(req.body.name !== "") {
        var nameString = "'" + req.body.name + "'";
        courses.insertCourse([
            "course_name", "semester"
        ], [
            nameString,
            semester
        ], function() {
              res.redirect("/");
        });
    }
    else {
        res.render("400");
    }
});
 
router.put("/status", function(req, res) {
    var condition = "id = " + req.body.id;
    courses.updateCourse({
        completed: req.body.completed,
        current: req.body.current,
        planned: req.body.planned
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/delete", function(req, res) {
    var condition = "id = " + req.body.id;
    courses.deleteCourse(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
