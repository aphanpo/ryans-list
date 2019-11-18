const mysql = require('mysql')

const pool = mysql.createPool({
    connectLimit: 10,
    username: "root",
    password: "",
    host: "localhost",
    database: "ryans_list"
});

module.exports = pool