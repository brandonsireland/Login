const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const key = require('./config/keys');
const PORT = 3000;

// Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(key.mongoURI, {
    useNewUrlParser: true
});
// require('./config/passport')(passport); // pass passport for configuration

// Configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
const routes = require('./routes');

// Passport configuration
app.use(passport.initialize());
require('./config/passport');
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});