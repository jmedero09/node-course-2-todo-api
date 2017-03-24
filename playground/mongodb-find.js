//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



//Name of the collection will be TodoApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mondgoDb server');
    }
    console.log('Connected to mongo db server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('58d49f935b280bbb5176268dcl')
    // }).toArray().then((documents) => {
    //     console.log('Todods');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todods Count: ' + count);
    // }, (err) => {
    //     console.log('unable to fetch todos ', err);
    // });

    db.collection('Users').find({ name: 'Jesus Medero' }).toArray().then((docs) => {
        console.log('Documtnets');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos ', err);
    });


    //db.close();
});