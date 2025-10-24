// Basic Express server
const express = require('express');
const app = express();
const PORT = 3000;

// In-memory users array for demo
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

// Root route: simple welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// /users route: demonstrate .filter and .map
// - .filter keeps only active users
// - .map transforms user objects to include only id and name
app.get('/users', (req, res) => {
  const activeUsers = users
    .filter(user => user.active) // keep only active users
    .map(user => ({ id: user.id, name: user.name })); // return simplified objects

  res.json(activeUsers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
