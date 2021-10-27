const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Detalle_PedidoSchema = new Schema({
   ID_Detalle_Pedido: {
    type: Schema.Types.ObjectId,
    ref: 'Pedido',
    },
  },
  ID_Producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  },
  Cantidad: Number,
  Costo_Producto: Number,
  Subtotal: Number,
  Total: Number,
  ID_Almacen: {
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
    },
  },
}, {
  timestamps: true,
});

const Detalle_PedidoModel = mongoose.model('Detalle_Pedido', Detalle_PedidoSchema);
module.exports = { Detalle_PedidoSchema, Detalle_PedidoModel };
