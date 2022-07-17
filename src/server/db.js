const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'Tantal00',
    host: 'localhost',
    port: 8080,
    database: 'postgres'
});

module.exports = pool;
