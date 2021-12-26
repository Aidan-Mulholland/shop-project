const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

app.use(express.static('../img'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});