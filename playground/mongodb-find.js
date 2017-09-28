// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MondoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59bcba44eb44ec226460d880')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find({name: 'Paul Baur'}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Paul Baur'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })

  // db.close();
});
