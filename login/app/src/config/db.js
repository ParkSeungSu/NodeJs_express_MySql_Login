"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"dl6tlqdl",
    database:"login_user"
});

db.connect();

module.exports = db;