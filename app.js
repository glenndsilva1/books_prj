const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');


// Use morgan to log requests
app.use(morgan('dev'));

// Serve static files (HTML, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')));
// Define a route

app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
