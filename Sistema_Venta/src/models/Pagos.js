const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PagosSchema = new Schema({
   ID_Pago: {
    type: Number,
    index: {
      unique: true,
    },
  },
  ID_Pedido: {
    type: Schema.Types.ObjectId,
    ref: 'Pedido',
  },
  ID_Metodo_Pago: {
    type: Schema.Types.ObjectId,
    ref: 'Metodo_Pago',
  },
  Subtotal: Number,
  Total: Number,
  Estatus: String,
}, {
  timestamps: true,
});

const PagosModel = mongoose.model('Pagos', PagosSchema);
module.exports = { PagosSchema, PagosModel };
