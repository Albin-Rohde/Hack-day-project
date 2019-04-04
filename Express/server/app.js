const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const api = require('./api');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/login', api.loginToInstagram);
app.get('/api/redirect', api.getToken);
app.get('/api/getmedia/:token', api.getMedia);
app.use('/api/website', express.static(path.join(__dirname, 'zip/website.zip')));
app.post('/api/posthtml', api.generateHtml);
module.exports.app = app;