const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();
const db = require('./config/db');
const PORT = 3000;

// Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.URI, {
    useNewUrlParser: true
});

// Configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// Routes
const routes = require('./routes');

// Passport configuration
app.use(passport.initialize());
require('./config/passport');
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});