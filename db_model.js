const mongoose = require('mongoose');
const { Schema } = mongoose;

const stock_schema = new Schema({
    symbol: { type: String, required: true },
    likes: { type: [String], default: [] }
});

const stock = mongoose.model('stock', stock_schema);

exports.stock = stock;