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

    //uncomment & comment out these two doc initialisations to 
    //create a database of different movies.
    /*
    var doc = {
      title : 'Jaws',
      year : 1975,
      director : 'Stephen Speilberg',
      rating : 'PG'
    };
    */
    var doc = {
      title : 'Jaws 2',
      year : 1976,
      director : 'Stephen Speilberg',
      rating : 'PG'
    };


    db.collection('movies').insert(doc, function(error, result) {
      //
      if (error) {
        console.log(error);
        process.exit(1);
      }
      var query = { year : 1976 };
      db.collection('movies').find(query).toArray(function(error, docs) {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log('Found docs:');
        docs.forEach(function(doc) {
          console.log(JSON.stringify(doc));
        });
        process.exit(0);
      });
    });
});

//execute with 'node crud-example.js'
//Found docs:
//{"_id":"58c74eea19f23548206e2dc1","title":"Jaws","year":1975,"director":"Stephen Speilberg","rating":"PG"}
//NB: keeps adding row of data to movies. have not designed system to prevent this.

