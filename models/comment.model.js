const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Comment model
let CommentSchema = new Schema({
    account_id: {type: String, required: true},
    post_id: {type: String, required: true},
    comments: {type: String, required: true},
    dateTime: {type: Date, required: true}
});

// Export the Comment model
module.exports = mongoose.model('Account', AccountSchema);
module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Comment', CommentSchema);
