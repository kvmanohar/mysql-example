const mysql = require('mysql');
const experss = require('express');
const bodyParser = require('body-parser');

var app = experss();
app.use(bodyParser.json());

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
app.listen(3000);
