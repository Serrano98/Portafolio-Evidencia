const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Definition
const AlmacenSchema = new Schema({
  ID_Almacen: {
    type: Number,
    index: {
      unique: true,
    },
  },
  Nombre_Almacen: {
    type: String,
    index: {
      unique: true,
    },
  },
  ID_Producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  },
  Cantidad: Number,
}, {
  timestamps: true, // created_at, updated_at
});

// Model
const UserModel = mongoose.model('Almacen', AlmacenSchema);
module.exports = { AlmacenSchema, UserModel };
