const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post model
let PostSchema = new Schema({
    account_id: {type: String, required: true},
    posts: {type: String, required: true},
    category: {type: String, required: true},
    dateTime: {type: Date, required: true}
});

// Export the Post model
module.exports = mongoose.model('Account', AccountSchema);
module.exports = mongoose.model('Post', PostSchema);
