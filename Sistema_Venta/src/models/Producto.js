const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  ID_Usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  ID_Categoria: [{
    type: Schema.Types.ObjectId,
    ref: 'Categoria',
  }],
  ID_Marca: {
    type: Schema.Types.ObjectId,
    ref: 'Marca',
  },
  Modelo: String,
  Precio: Number,
  Color: String,
  Capacidad_Almacenamiento: String,
  Descripcion: String,
}, {
  timestamps: true,
});

const ProductModel = mongoose.model('Producto', ProductSchema);
module.exports = { ProductSchema, ProductModel };
