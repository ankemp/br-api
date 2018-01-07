const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');



const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const sequelize = require('./sequelize');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// CORS Config
const corsOptions = {
  origin: function (origin, callback) {
    const whitelist = ['https://battlelegend.com', 'https://www.battlelegend.com', 'localhost', 'dot-br-history-188417.appspot.com'];
    if (app.get('environment') !== 'production' || typeof origin === 'undefined' || whitelist.findIndex(w => origin.includes(w)) !== -1) {
      callback(null, true)
    } else {
      callback(new Error(`Unauthorized Access Attempt from ${origin}`))
    }
  }
}
// Enable CORS, security, compression, favicon and body parsing
app.use(cors(corsOptions));
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
app.configure(express.rest());


app.configure(sequelize);


// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
