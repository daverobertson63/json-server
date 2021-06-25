const express = require('express');

const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);


const server = app.listen(3001, () => {
    console.log("Config server now starting");
    console.log('listening on port %s...', server.address().port);
});