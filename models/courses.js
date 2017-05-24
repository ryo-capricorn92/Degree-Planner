//imports ORM 
var orm = require("../config/orm.js");

var courses = {
    selectAll: function(callbackFunction) {
        orm.selectAll("courses", function(result) {
            callbackFunction(result);
        });
    },
    insertCourse: function(column, value, callbackFunction) {
        orm.insertCourse("courses", column, value, function(result) {
            callbackFunction(result);
        });
    },
    updateCourse: function(columnValuesObject, condition, callbackFunction) {
        orm.updateCourse("courses", columnValuesObject, condition, function(result) {
            callbackFunction(result);
        });
    },
    deleteCourse: function(condition, callbackFunction) {
        orm.deleteCourse("courses", condition, function(result) {
            callbackFunction(result);
        });
    }
};

module.exports = courses;
