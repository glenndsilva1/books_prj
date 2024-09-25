const express = require('express');
const router = express.Router();

// Business logic class
class Books {
  constructor(pool) {
    this.pool = pool; // Use the connection pool passed in
  }

  // Method to fetch books from the database using the pool
  dbbooks() {
    console.log("Connecting");
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM books';
      
      // Use the pool to execute the query
      this.pool.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  // Method to fetch the books page with database results
  async allbooks() {
    try {
      const books = await this.dbbooks();
      console.log(books);
      return JSON.stringify(books); // Send the results back as a JSON string
    } catch (error) {
      console.error('Error fetching books:', error);
      return 'Error fetching books from the database.';
    }
  }
}

// Define a function that takes in the connection pool and returns the router
function alldbbooks(pool) {
  const books = new Books(pool); // Pass the pool to the class

  // Define the route
  router.get('/', async (req, res) => {
    const message = await books.allbooks(); // Call the method of the class
    res.send(message);
  });

  return router; // Return the router instance
}

module.exports = alldbbooks;