const {URLSearchParams} = require('url');
const fetch = require('node-fetch');
const {clientData} = require('./instagram');
const file = require('./filehandler');


function loginToInstagram(req , res){
    res.redirect(`${clientData.baseUrl}/authorize/?client_id=${clientData.clientID}&redirect_uri=https://localhost:8443/api/redirect&response_type=code`);
}

async function getToken(req, res){
    const code = req.query.code;
    const queryString = new URLSearchParams;
    queryString.append('client_id', clientData.clientID);
    queryString.append('client_secret', clientData.clientSecret);
    queryString.append('grant_type', 'authorization_code');
    queryString.append('redirect_uri', 'https://localhost:8443/api/redirect');
    queryString.append('code', code);
    try{
        const data = await fetch(`${clientData.baseUrl}/access_token`, {
            method: 'POST',
            body: queryString,
        }).then(data => data.json())
            .then(jsonData => jsonData);
        console.log(data.user);
        res.cookie('name', data.user.full_name);
        res.cookie('token', data.access_token);
        res.redirect('https://localhost:3000');
    }catch(err){
        console.error(err);
        res.redirect('/error');
    }
}

async function getMedia(req, res){
    const token = req.params.token;
    const imgArray = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`)
        .then(data => data.json())
        .then(jsonData => {
            return jsonData.data.map(imgObject => imgObject.images.standard_resolution.url);
        });
    jsonString = JSON.stringify({img : imgArray});
    res.send(jsonString);
}

async function generateHtml(req, res){
    console.log('post endpoint was reached');
    const html = req.body.text;
    await file.generatehtmlFile(html);
    console.log('Zipped html');
    console.log('file was sent to frontEnd');
}

module.exports = {
    loginToInstagram,
    getToken,
    getMedia,
    generateHtml,
}