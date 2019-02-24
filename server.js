const ip          = require('ip');
const path        = require('path');
const express     = require("express");
const bodyParser  = require("body-parser");
const config      = require('./configs/config');
const app         = express();
var session       = require('express-session');
var server        = require('http').Server(app);

// configuring app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// middleware of the app
app.use(session({resave: false, saveUninitialized: false, secret: 'QSA', cookie: { maxAge: 6000000 }}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'assets')));
app.use("/nscripts", express.static(path.join(__dirname, 'node_modules')));

// Routing of the app
app.use(require('./controllers/welcome'));
app.use("/customer", require('./controllers/customer'));
app.use("/admin", require('./controllers/admin'));
app.use("/shop", require('./controllers/shop'));

// listening server
server.listen(config.port, config.ip, function() {
  console.log('Server running at http://' + ip.address() + ':' + config.port + '/');
});
