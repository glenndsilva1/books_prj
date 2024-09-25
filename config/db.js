// db.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',       // Your database host
  user: 'root',   // Your database username
  password: 'admin', // Your database password
  database: 'books', // Your database name
  waitForConnections: true,
  connectionLimit: 10,     // Number of connections to create at once
  queueLimit: 0            // Unlimited queue size
});

// Export the pool
module.exports = pool;

