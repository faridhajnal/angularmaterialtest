var express = require('express'); 
var PORT = process.env.PORT || 655; 
var app = express(); 
app.use(express.static(__dirname + '/public')); 
app.listen(PORT); 

console.log('App succesfuly running on port ' + PORT);