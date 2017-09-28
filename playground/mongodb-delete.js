// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MondoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany Users
  // db.collection('Users').deleteMany({name: 'Paul Baur'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete id: 59cc9f150c9d6875450d13b9
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59cc9f150c9d6875450d13b9")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined,2));
  })

  // db.close();
});
