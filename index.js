"use strict";
const express = require('express');


const app = express();

// let Heroku set the port
const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
  
  // Handle malformed user agents e.g. that do not contain software or are undefined
  let software = null;
  const useragent = request.headers['user-agent'] ? request.headers['user-agent'] : null;
  const softwareMatch = useragent ? request.headers['user-agent'].match(/\(([^)]+)\)/) : null
  if (softwareMatch && softwareMatch.length > 1) {
    software =  softwareMatch[1];
  } 

  response.json({
    ipaddress: request.headers['x-forwarded-for'] ? request.headers['x-forwarded-for'].split(',')[0] : request.connection.remoteAddress,
    language: request.headers['accept-language'] ? request.headers['accept-language'].split(',')[0] : null,
    useragent,
    software
  });
});

app.listen(port);
