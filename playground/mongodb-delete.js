//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



//Name of the collection will be TodoApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mondgoDb server');
    }
    console.log('Connected to mongo db server');

    //delete many
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });

    //Delete One works likes delte many but its stops at the first item that it finds that meets the criteria
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });c

    //Find one and Delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').deleteMany({ name: 'Jesus Medero' }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('58d3fea000fa71cc47846846') }).then((result) => {
            console.log(result);
        })
        //db.close();
});