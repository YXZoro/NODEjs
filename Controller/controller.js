var express=require('express');
var swig=require('swig');

var app=express();
app.set('view engine','html');
app.engine('html',swig.renderFile);


app.get('/test',function(req,res ){
	console.log("---------------------------------");
	res.render('test',{test:'it is my test ==>> swig'});
});


var server=app.listen(3000,function(){ 
	console.log('app is listening');
	console.log("Server  start--------------------");
	//console.log('---MVC---controller+model[mongoDB..]+view[Swig..]----');
});



// Nodejs should use MongoDB first, or Mysql.. //

//----------------------------------------------------------------
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '3306'
// });
// connection.connect();
// connection.query('show databases', function(err, rows, fields) {
//   if (err) throw err;
//   console.log(rows);
// });

