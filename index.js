var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
//example = name of database to connect toArray
mongodb.MongoClient.connect(uri, function(error, db) {
  //callback function executes when either driver successfull connects 
  // or error occurs.
  //bother error and db are potentially null
  if (error) {
    console.log(error);
    process.exit(1);
  }

  db.collection('sample').insert({ x: 1 }, function(error, result) {
    //if db has a handle tries to access the 'sample' collection
    if (error) {
      console.log(error);
      process.exit(1);
    }

    db.collection('sample').find().toArray(function(error, docs) {
      //find function returns a cursor.
      // the toArray function returns an easier to deal with array of documents.
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