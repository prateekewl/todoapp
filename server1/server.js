const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var taskCtrl = require('./controllers/task');
var usersCtrl = require('./controllers/users');

app.use('/api/task', taskCtrl);
app.use('/api/users', usersCtrl);

app.get('/', function (req, res) {
  return res.send("hello world");
});

app.listen(process.env.PORT || 3000);
