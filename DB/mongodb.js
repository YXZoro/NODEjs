var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/myproject';

mongoClient.connect(url, function(err, db) {   //都是在【回调函数】里处理结果,,
  console.log("server Connected..");
  //do CRUD ==>> insert/delete/update/find 
  var collection = db.collection('myCollection');
  
  collection.insertMany(
  [{a:1}, {a:2}, {a:3}], 
  function(err, result){}
  );
  
  collection.updateOne(
  {a:2},{$set:{b:1}}, 
  function(err, result){}
  );
  
  collection.deleteOne(
  {a:3}, 
  function(err, result){}
  );
  
  collection.find(
  {},
  function(err, docs) {
  );
  
  db.close();
});


