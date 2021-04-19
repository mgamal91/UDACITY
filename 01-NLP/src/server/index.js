//URL 
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
//holder of all project data
projectData = {};
var path = require('path');
//secure your data/apikey
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.APIKey;
//check your APIKey
console.log(`Your API key is ${process.env.APIKey}`);
//Get fetch to work here
const fetch = require("node-fetch");
//instance of form-data
var FormData = require('form-data');
//Express
const express = require('express');
const app = express();
//Directory Name(project folder)
app.use(express.static('dist'));
const mockAPIResponse = require('./mockAPI.js');
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//PORT
//specify port no
let portNo = 3000;
// designates what port the app will listen to for incoming requests
app.listen(portNo, listenFn)

function listenFn() {
    console.log(`Example app listening on port ${portNo}!`)
}

console.log(__dirname);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


//Routing(memo)
// Post Route
app.post('/api', (req, res) => {
    /*API Link Structure
     *baseURL+apiKey+url+apiLang
     */
    const formdata = new FormData();
    formdata.append("key", `${process.env.APIKey}`);
    //to pass url through user
    formdata.append("url", req.body.myURL);
    formdata.append("lang", "en");
    const options = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    //baseURL="https://api.meaningcloud.com/sentiment-2.1";
    //fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    fetch(baseURL, options)
        .then(response => response.json())
        .then(response => res.send(response))
        .catch(error => console.log('error', error));
})