const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Rating model
let RatingSchema = new Schema({
    account_id: {type: String, required: true},
    rate: {type: Number, required: true}
  
});

// Export the Rating model
module.exports = mongoose.model('Account', AccountSchema);
module.exports = mongoose.model('Rating', RatingSchema);
