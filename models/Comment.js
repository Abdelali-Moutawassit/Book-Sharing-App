const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Comment', commentSchema);
