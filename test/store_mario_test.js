const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/MarioChar')

describe('Saving records', function(){
    it('saved records to the database',function(done){
       //note name and weight is the value of fields in the schema
        var save_data = new MarioChar({
            name : 'Luigi',
            weight : 30
        })

        //the save method is provided by mongoose
        //saving is an asynchronous process
        //ie to wait for saving to be successfull or failed and assert
        //and mongoose knows this and offers us the .then method 

        
        save_data.save().then(function(){
            //mongoose also offers us isNew
            // Mongoose will set `isNew` to `false` if `save()` succeeds
            // isNew checks has this document been persisted to the database yet?
            //ie if data is new and has not been persisted to DB it returns a false
           assert(save_data.isNew === false );
           done(); // the done function is called in the test function callback,used to tell mocha when test is done 
        });
    })
})
