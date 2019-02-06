var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var express = require ('express');;
var app = express();
var port = 3001;
var users = {

  'David': {
    age: 52,
    occupation: 'Professor',
    hobby: 'Swimming'
  },

  'Robert': {
    age: 34,
    occupation: 'Engineer',
    hobby: 'Running'
  },

  'Jane': {
    age: 28,
    occupation: 'Nurse',
    hobby: 'Chess'
  }

};

app.get ("/", function(req, res){ // request and response
  res.status(200);
  res.send("<html><body><h1>hey you asked for the '/' </h1></body></html>");
});

app.get('/user', function(req, res) {

  var userQuery = req.query;
  var userKey = userQuery.name;
  var user = (users[userKey])

  var leeroy = {
    name: "Leeroy",
    last_name:"Jenkins",
  };

  if(user) {
    res.json(user);
  } else {
    res.json(leeroy)
  }
});



app.listen(port, function(){
  console.log("listening to Express at port " + port);
});
