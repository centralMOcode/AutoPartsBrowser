const mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "scott",
	password: "tiger",
	database: "autopartsbrowser"
});

module.exports = {
    con: con,
    mysql: mysql
};