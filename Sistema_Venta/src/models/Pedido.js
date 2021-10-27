const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
   ID_Pedido: {
    type: Number,
    index: {
      unique: true,
    },
  },
  ID_Usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  ID_Direccion: {
    type: Schema.Types.ObjectId,
    ref: 'Direccion',
  },
  ID_Pago: {
    type: Schema.Types.ObjectId,
    ref: 'Pago',
  },
  Subtotal: Number,
  Total: Number,
}, {
  timestamps: true,
});

const PedidoModel = mongoose.model('Pedido', PedidoSchema);
module.exports = { PedidoSchema, PedidoModel };
