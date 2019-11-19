const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Account model
let AccountSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    userType:{type:String,required:true}
});

// Export the account model
module.exports = mongoose.model('Account', AccountSchema);
