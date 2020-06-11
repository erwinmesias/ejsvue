const express = require('express');
const path = require('path');
const app = express();
const mix = require('./client/plugins/mix.js')

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/views'));

const publicPath = 'client/public';
app.use(express.static(path.join(__dirname, publicPath)));

app.get('/', (req, res) => {
  res.render('index');
})

app.locals.mix = mix(publicPath);

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
