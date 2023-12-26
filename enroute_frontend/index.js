const express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
var smtpTransport = require('nodemailer-smtp-transport');
var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

const port = 4000;

// Set the view engine to Pug
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'static')));
const staticPath = path.join(__dirname, 'static/pdf');

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

app.post('/bookservice', (req, res) => {
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'shubhampingle905@gmail.com',
      pass: 'mwgxxelwantyfjkc'
    }
  }));

  var html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Request Received!</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              margin: 0;
              padding: 0;
          }
  
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .container2 {
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h1 {
              font-size: 24px;
              color: #333;
          }
  
          p {
              font-size: 16px;
              color: #555;
          }
  
          label {
              font-weight: bold;
          }
  
          .form-group {
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              /* Vertically center the content */
          }
  
          input[type="text"],
          input[type="email"],
          input[type="tel"],
          input[type="number"],
          textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 3px;
          }
  
          button {
              background-color: #007bff;
              color: #fff;
              border: none;
              padding: 10px 20px;
              cursor: pointer;
              border-radius: 3px;
          }
  
          button:hover {
              background-color: #0056b3;
          }
  
          .highlight-label {
              margin-right: 10px;
              /* Add some spacing between the label and the name */
              font-weight: bold;
              color: #1a2d42;
              /* Highlight the label text color */
          }
  
          .highlight-text {
              color: #1a2d42;
              /* Highlight the name text color */
          }
      </style>
  </head>
  
  <body>
      <div class="container">
        <div class="container2">
            <h1>Travel Package Booking Request!</h1>
            <p>Hello Shivam,</p>
            <p>You have received a booking request from a valued Explorer.</p>
            <br>
            <p>
                <span class="highlight-label">Name of Explorer:</span>
                <span class="highlight-text"><b> ${req.body.name}</b></span>
            </p>
            <p>
                <span class="highlight-label">Email:</span>
                <span class="highlight-text"><b> ${req.body.email}</b></span>
            </p>
            <p>
                <span class="highlight-label">Phone Number::</span>
                <span class="highlight-text"><b> ${req.body.phoneNumber1}</b></span>
            </p>
            <p>
                <span class="highlight-label">Number of Explorers Attending:</span>
                <span class="highlight-text"><b> ${req.body.numberOfExplorers}</b></span>
            </p>
            <p>
                <span class="highlight-label">Date Requested for Tour:</span>
                <span class="highlight-text"><b> ${req.body.date}</b></span>
            </p>
            <p>
                <span class="highlight-label">Message (Optional):</span>
                <span class="highlight-text"><b> ${req.body.message}</b></span>
            </p>
        </div>
      </div>
  </body>
  
  </html>
  `;
  var mailOptions = {
    from: 'shubhampingle905@gmail.com',
    to: 'shubhampingle905@gmail.com',
    subject: 'Booking Request Received!',
    html: html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      // res.status(200);
      res.send('Email sent: ' + info.response);
      console.log('Email sent: ' + info.response);
    }
  });
});

app.get('/downloadpdf', (req, res) => {
  console.log('innn');
  try {
//Extracting Filename from query
    const fileName = req.query.filename;
    
    const pdfFilePath = path.join(staticPath, fileName);

    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'application/pdf');

    // Read the PDF file and stream it to the response
    const pdfStream = fs.createReadStream(pdfFilePath);
    pdfStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.post('/subscribe', (req, res) => {
  var transporterUser = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'shubhampingle905@gmail.com',
      pass: 'mwgxxelwantyfjkc'
    }
  }));
  var transporterAdmin = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'shubhampingle905@gmail.com',
      pass: 'mwgxxelwantyfjkc'
    }
  }));

  var htmlUser = `<!DOCTYPE html>
  <html>
  <head>
      <style>
          /* Add your email-specific CSS styles here */
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
  
          .container {
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
              margin: 20px auto;
              max-width: 600px;
              padding: 20px;
          }
  
          .header {
              text-align: center;
          }
  
          .logo {
              max-width: 150px;
              height: auto;
          }
  
          .title {
              font-size: 24px;
              margin-top: 10px;
          }
  
          .content {
              margin-top: 20px;
              color: #333;
              font-size: 16px;
          }
  
          .footer {
              text-align: center;
              margin-top: 20px;
          }
  
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              transition: background-color 0.3s;
          }
  
          .button:hover {
              background-color: #0056b3;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <!-- <img class="logo" src="your_logo_url_here" alt="Enroute Tours Logo"> -->
              <h1 class="title">Welcome to Enroute Tours!</h1>
          </div>
          <div class="content">
              <p>Thank you for subscribing to Enroute Tours. You're now part of our travel community, and we're excited to have you on board!</p>
              <p>Get ready to embark on amazing journeys and explore the world with us. We'll keep you updated with the latest tour packages, travel tips, and exclusive offers.</p>
              <p>Stay tuned for upcoming adventures that will leave you with unforgettable memories.</p>
          </div>
          <div class="footer">
              <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:shivam@enroute-tours.com">shivam@enroute-tours.com</a>.</p>
          </div>
          <div class="footer">
              <a class="button" target="_blank" style="color: white !important;" href="http://www.enroute-tours.com">Explore Tours</a>
          </div>
      </div>
  </body>
  </html>  
  `;

  var htmlAdmin = `<!DOCTYPE html>
  <html>
  <head>
      <style>
          /* Add your email-specific CSS styles here */
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
  
          .container {
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
              margin: 20px auto;
              max-width: 600px;
              padding: 20px;
          }
  
          .header {
              text-align: center;
          }
  
          .logo {
              max-width: 150px;
              height: auto;
          }
  
          .title {
              font-size: 24px;
              margin-top: 10px;
          }
  
          .content {
              margin-top: 20px;
              color: #333;
              font-size: 16px;
          }
  
          .footer {
              text-align: center;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <!-- <img class="logo" src="your_logo_url_here" alt="Enroute Tours Logo"> -->
              <h1 class="title">New Subscription Alert!</h1>
          </div>
          <div class="content">
              <p>A new user has subscribed to Enroute Tours for updates:</p>
              <ul>
                  <li><strong>Email:</strong> ${req.body.email}</li>
              </ul>
              <p>Stay connected and keep providing great travel experiences!</p>
          </div>
          <div class="footer">
              <p>If you have any questions, please contact the user at <a href="mailto:${req.body.email}">${req.body.email}</a>.</p>
          </div>
      </div>
  </body>
  </html>
  `;

  var mailOptionsUser = {
    from: 'shubhampingle905@gmail.com',
    to: req.body.email,
    subject: "Thank You for Subscribing to Enroute: Let's Explore Together!",
    html: htmlUser
  };
  var mailOptionsAdmin = {
    from: 'shubhampingle905@gmail.com',
    to: 'shubhampingle905@gmail.com',
    subject: 'New Subscription Alert!',
    html: htmlAdmin
  };

  transporterAdmin.sendMail(mailOptionsAdmin, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent to Admin: ' + info.response);
      transporterUser.sendMail(mailOptionsUser, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          // res.status(200);
          res.send('Email sent: ' + info.response);
          console.log('Email sent to User: ' + info.response);
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 