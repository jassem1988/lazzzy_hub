const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/LazzzyHub', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('LazzzyHub');

  // db.collection('Resources').find().toArray().then((docs) => {
  //   console.log('Resources');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(error) => {
  //   console.log('Unable to fetch resource');
  // });

  // db.collection('Resources').find().count().then((count) => {
  //   console.log(`Count: ${count}`);
  // },(error) => {
  //   console.log('Unable to fetch resources', error);
  // });

  // db.collection('Resources').find({
  //   _id: new ObjectID('5be91c599c10156ecb72b534')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch resource', error);
  // });

  // client.close();
});
