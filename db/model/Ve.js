const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
    id_chuyen_tau: { type: Number, required: true },
    id_nhan_vien: { type: Number, required: true },
    id_khach_hang: { type: Schema.Types.ObjectId, ref: 'KhachHang', required: true },
    id_tru_so: { type: Number, required: true },
    gia_ve: { type: Number, required: true },
    id_ghe: { type: Number, required: true }
}, { 
    collection: 'Ve',
    versionKey: false
});

module.exports = mongoose.model('Ve', ticketSchema, 'Ve');
