/*jshint esversion: 6 */

const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

// Connect Database
connectDB();

// Passport config

require('./config/passport')(passport);

// sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Init Middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// app.use('/api/auth/google').require('./routes/api/auth');

app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/plants', require('./routes/api/plants'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
