require('rootpath')();

// Deps
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// JWT for auth
const jwt = require('_helpers/jwt');

// Custom Error Handling
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

// Routes (defer to controllers)
app.use('/users', require('./users/users.controller'));
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
