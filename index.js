const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/views'));

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
