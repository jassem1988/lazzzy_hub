const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/LazzzyHub', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('LazzzyHub');

  // db.collection('Resources').insertOne({
  //   section: 'npm',
  //   header: 'npm',
  //   logoImg: 'https://authy.com/wp-content/uploads/npm-logo.png',
  //   link: 'https://www.npmjs.com/',
  //   description: 'Npm is the package manager for JavaScript and the world’s largest software registry.'
  // },(error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert resource');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Resources').insertOne({
    section: 'npm',
    header: 'body-parser',
    logoImg: 'https://authy.com/wp-content/uploads/npm-logo.png',
    link: 'https://www.npmjs.com/package/body-parser',
    description: 'It Parses incoming request bodies in a middleware before your handlers, available under the req.body property.'
  }, (error, result) => {
    if(error) {
      return console.log('Unable to insert resource');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
