// Node libraries
const express = require('express'),
      hbs     = require('hbs');

const port = process.env.PORT || 5000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //Let hbs use partials
app.set('view engine', 'hbs'); // Set express to use hbs in the views dir

app.use(express.static(__dirname + '/public')); //let express use /public folder

app.get('/', (req, res) => {
  res.render('home.hbs', {
    creator: 'Jassem Al-Buloushi',
    date: new Date().getFullYear()
  });
});

app.get('/landing', (req, res) => {
  res.render('landing.hbs', {
    creator: 'Jassem Al-Buloushi',
    date: new Date().getFullYear()
  });
});



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
