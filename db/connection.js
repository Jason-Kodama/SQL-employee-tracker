const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'office_db'
    },
    console.log(`Connected to the office_db database.`),
    );

module.exports = db;