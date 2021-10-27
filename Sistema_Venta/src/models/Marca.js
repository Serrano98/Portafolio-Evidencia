const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Definition
const MarcaSchema = new Schema({
  ID_Marca: {
    type: Number,
    index: {
      unique: true,
    },
  },
  Nombre: {
    type: String,
    index: {
      unique: true,
    },
  },
}, {
  timestamps: true, // created_at, updated_at
});

// Model
const UserModel = mongoose.model('Marca', MarcaSchema);
module.exports = { MarcaSchema, UserModel };
