const {app} = require('./app');
const https = require('https');
const fs = require('fs');

const privateKey = fs.readFileSync('./certificates/server.key', 'utf8');
const certificate = fs.readFileSync('./certificates/server.crt', 'utf8');
const credentials = {
    key: privateKey,
    cert: certificate
}; 

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443);
console.log('server started on: localhost:8443');