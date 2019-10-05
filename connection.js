const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mksqlSample',
	multipleStatements: true
});

mysqlConnection.connect((err) => {
	if (!err) console.log('Sql Connected');
	else console.log(`Connection Failed!! -- ${err}`);
});

module.exports = mysqlConnection;
