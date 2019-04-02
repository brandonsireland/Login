const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');
const db = require('./config/db');

// connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.url, {
    useNewUrlParser: true
});

const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});