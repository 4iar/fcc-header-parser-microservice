"use strict";
const express = require('express');


const app = express();

// let Heroku set the port
const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
  response.json({
    ipaddress: request.headers['x-forwarded-for'] ? request.headers['x-forwarded-for'].split(',')[0] : request.connection.remoteAddress,
    language: request.headers['accept-language'] ? request.headers['accept-language'].split(',')[0] : null,
    useragent: request.headers['user-agent'],
    software: request.headers['user-agent'].match(/\(([^)]+)\)/)[1]
  });
});

app.listen(port);
