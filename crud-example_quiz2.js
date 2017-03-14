//chapter 1, lecture 'Inserts and queries using the node.js driver'
//
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  //connects to database
    if (error) {
      console.log(error);
      process.exit(1);
    }

    //console.log(db.collection('test').find().toArray());
    //fail : callback is mandatory

    //print(db.test.find());
    //print is not defined.

    //db.collection('movies').find().toArray(console.log);
    //returns null[] is database is empty
    //returns all rows of data in json format if database has content.

    db.collection('movies').findOne(console.log);
    //returns first row of data only, in json format if database has content.

});

//execute with 'node crud-example.js'
//NB: keeps adding row of data to movies. have not designed system to prevent this.

//NBB: needs work to fix the process.exit conditions.

