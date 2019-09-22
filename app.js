const express = require('express');

const bodyParser = require('body-parser');
const logger = require('morgan');

const axios = require('axios');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

let onOutageSimulation = false;
let serverURL = process.env.url;
let dnsURL = process.env.dns;


app.get('/', (req,res)=>{
    if(!onOutageSimulation) res.send({status: 'I\'m alive!'});
    else throw null;
});

app.get('/simulate', (req,res)=>{
    onOutageSimulation = true;
    setTimeout(()=>{
        onOutageSimulation = false;
        setTimeout(()=> axios.get(serverURL).then(res=>console.log(res.data))
    ,20000);
    },120000);
    res.send({});

});

axios.get(dnsURL).then(res=>console.log(res.data));
axios.get(serverURL).then(res=>console.log(res.data));

module.exports = app;
