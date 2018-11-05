// Node libraries
const express = require('express'),
      hbs     = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //Let hbs use partials
app.set('view engine', 'hbs'); // Set express to use hbs in the views dir

app.use(express.static(__dirname + '/public')); //let express use /public folder
