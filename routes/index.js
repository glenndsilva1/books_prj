const express = require('express');
const app = express();
const pool = require('../config/db'); // Import the connection pool
const alldbbooks  = require('../js/books');
// Define a route
const booksRoute = alldbbooks(pool);
app.use('/books', booksRoute);
// Export the router
module.exports = app;
