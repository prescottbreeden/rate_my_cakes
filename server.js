const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/rate_cakes')

app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist/client' ));
app.set('view engine', 'html');

require('./routes')(app);

app.listen(8000, function() {
    console.log('Power Overwhelming...')
})