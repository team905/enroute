const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Set the view engine to Pug
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'static')));

// Define a route for the homepage
app.get('/', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('home', { pageTitle: 'Welcome to Enroute' });
});
app.get('/Leh-Ladakh-Delights', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('Leh-Ladakh-Delights', { pageTitle: 'Leh-Ladakh-Delights' });
});
app.get('/2-Enroute-Kerala-Delights', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('2-Enroute-Kerala-Delights', { pageTitle: '2-Enroute-Kerala-Delights' });
});
app.get('/2-Enroute-Kerala-Delights-With-Houseboat', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('2-Enroute-Kerala-Delights-With-Houseboat', { pageTitle: '2-Enroute-Kerala-Delights-With-Houseboat' });
});
app.get('/3-Enroute-Kerala-Escape', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('3-Enroute-Kerala-Escape', { pageTitle: '3-Enroute-Kerala-Escape' });
});
app.get('/3H-Enroute-Kerala-Escape-With-Houseboat', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('3H-Enroute-Kerala-Escape-With-Houseboat', { pageTitle: '3H-Enroute-Kerala-Escape-With-Houseboat' });
});
app.get('/4-Enroute-Kerala-Explorer', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('4-Enroute-Kerala-Explorer', { pageTitle: '4-Enroute-Kerala-Explorer' });
});
app.get('/4H-Enroute-Kerala-Explorer-With-Houseboat', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('4H-Enroute-Kerala-Explorer-With-Houseboat', { pageTitle: '4H-Enroute-Kerala-Explorer-With-Houseboat' });
});
app.get('/5-Enroute-Kerala-Highlights', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('5-Enroute-Kerala-Highlights', { pageTitle: '5-Enroute-Kerala-Highlights' });
});
app.get('/5H-Enroute-Kerala-Houseboat-Highlights', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('5H-Enroute-Kerala-Houseboat-Highlights', { pageTitle: '5H-Enroute-Kerala-Houseboat-Highlights' });
});
app.get('/6-Enroute-2-Sisters', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('6-Enroute-2-Sisters', { pageTitle: '6-Enroute-2-Sisters' });
});
app.get('/7-Enroute-Meghalaya', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('7-Enroute-Meghalaya', { pageTitle: '7-Enroute-Meghalaya' });
});
app.get('/8-Enroute-Meghalaya-Kaziranga', (req, res) => {
  // Render the 'index.pug' template and pass data if needed
  res.render('8-Enroute-Meghalaya-Kaziranga', { pageTitle: '8-Enroute-Meghalaya-Kaziranga' });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 