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

    /*
    var doc = {
      title : 'Jaws 2',
      year : 1976,
      director : 'Stephen Speilberg',
      rating : 'PG'
    };
    */

    /*
    var doc = {
      title : 'Jaws',
      year : 1975,
      director : 'Stephen Speilberg',
      rating : 'AO',
      ratings : {
        critics: 80,
        audience: 100
      },
      screenplay: ['Peter Benchley', 'Carl Gotlieb']
    };


    db.collection('movies').insert(doc, function(error, result) {
      //
      if (error) {
        console.log(error);
        process.exit(1);
      }
      var query = { year : 1976, rating: 'PG' };
      db.collection('movies').find({ 'ratings.audience' : {'$gte':100} }).toArray(function(error, docs) {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log('list all database entries matching query', query)
        console.log('Found docs:');
        docs.forEach(function(doc) {
          console.log("1:", JSON.stringify(doc));
        });
        //process.exit(0);
      });
    });
    */

    //now list all rows in database
    /*
    db.collection('movies').find().toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }
      console.log('list all database entries')
      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log("2:", JSON.stringify(doc));
      });
      //process.exit(0);
    });
    */

    //console.log(db.collection('movies').find({ director: 'George Lucas' }).toArray());
    //causes unhandled exception

    //NB: there are no movies with director: 'George Lucas' in the database unless we insert them.
    //db.collection('movies').find({ director: 'George Lucas' }).toArray(function(error, docs) {
    db.collection('movies').find().toArray(function(error, docs) {
      console.log(docs);
    });
    //this works.

    
});

//execute with 'node crud-example.js'
//NB: keeps adding row of data to movies. have not designed system to prevent this.

//NBB: needs work to fix the process.exit conditions.

