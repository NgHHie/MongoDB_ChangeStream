const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    ten_khach_hang: { type: String },
    sdt: { type: String, required: true },
    email: { type: String, required: true },
    cccd: { type: String, required: true }
}, { 
    collection: 'KhachHang',
    versionKey: false
 });

module.exports = mongoose.model('KhachHang', customerSchema, 'KhachHang');
