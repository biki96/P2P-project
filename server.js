const express = require('express.io');
const app = express();

app.http().io();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(process.env.PORT || PORT, () => {
  console.log('Listening on port: ' + PORT);
});