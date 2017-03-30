const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/modles/todo');
const { User } = require('./../server/modles/user');
const { ObjectID } = require('mongodb');

// var id = '58dca8b4f3ae17958b318b1c11'
// if (!ObjectID.isValid(id)) {
//     console.log('id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id)
//     .then((todo) => {
//         if (!todo) {
//             return console.log('Id Not found');
//         }
//         console.log('Todo by id', todo)
//     }).catch((e) => {
//         console.log(e);
//     })

var id = "58dd4b30c651a3f97d38fc72";

User.findById(id).then((user) => {
    if (!user) {
        return console.log('No user found');
    }
    console.log(JSON.stringify(user, null, 2))
}, (e) => {
    console.log(e)
})