const mysql = require('mysql');
const experss = require('express');
const bodyParser = require('body-parser');

const mysqlConnection = require('./connection');
const PeopleRoutes = require('./routes/people');

var app = experss();
app.use(bodyParser.json());

app.use('/people', PeopleRoutes);

app.listen(3000);
