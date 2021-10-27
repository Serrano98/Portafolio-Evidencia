const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Definition
const CategoriaSchema = new Schema({
  ID_Categoria: {
    type: Number,
    index: {
      unique: true,
    },
  },
  Nombre_Categoria: {
    type: String,
    index: {
      unique: true,
    },
  },
  Descripcion_Categoria: String,
}, {
  timestamps: true, // created_at, updated_at
});

// Model
const UserModel = mongoose.model('Categoria', CategoriaSchema);
module.exports = { CategoriaSchema, UserModel };
