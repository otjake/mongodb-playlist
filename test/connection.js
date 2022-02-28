// Initial connection requirements
const mongoose = require('mongoose');

//using es6 default promise instead of mongoose default promise as it is depreciated
mongoose.Promise = global.Promise

//in other to avoid tests or db trasactions occue before the db is connected to or created we put code below
// in mongoose before method along with a done arguement so we know when connection is done
before(function(done){
  // Connect to mongodb
    //if the db testaroo dosent exist it creates
    mongoose.connect('mongodb://localhost/testaroo');

    //mongoose.connection gives details of the connection
    //mongoose.connection.once listens for when the connection is open
    //then .on is steady checking for an error if it exist
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });
})
  



// // ES6 Promises

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connect to db before tests run
// before(function(done){

//     // Connect to mongodb
//     //if the db testaroo dosent exist it creates
//     mongoose.connect('mongodb://localhost/testaroo');

//     //mongoose.connection gives details of the connection
//     //mongoose.connection.once listens for when the connection is open
//     //then .on is steady checking for an error if it exist
//     mongoose.connection.once('open', function(){
//         console.log('Connection has been made, now make fireworks...');
//         done();
//     }).on('error', function(error){
//         console.log('Connection error:', error);
//     });

// });

// // Drop the characters collection before each test
// beforeEach(function(done){
//     // Drop the collection
//     mongoose.connection.collections.mariochars.drop(function(){
//         done();
//     });
// });
