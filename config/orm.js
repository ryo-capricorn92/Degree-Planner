

var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callbackFunction) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
               throw err;
            }
            callbackFunction(result);
        });
    },
    insertCourse: function(table, column, value, callbackFunction) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += value;
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callbackFunction(result);
        });
    },
    updateCourse: function(table, columnValuesObject, condition, callbackFunction) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objectToSQL(columnValuesObject);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) {
               throw err;
            }
            callbackFunction(result);
        });
    },
    deleteCourse: function(table, condition, callbackFunction) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            callbackFunction(result);
        });
    }
};

function objectToSQL(object) {
    var arr = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push(key + "="+ object[key]);
        }
    }
    return arr.toString();
}

module.exports = orm;