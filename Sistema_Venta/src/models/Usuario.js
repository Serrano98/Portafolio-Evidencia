const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Definition
const UsuarioSchema = new Schema({
  ID_Usuario: {
    type: String,
    index: {
      unique: true,
    },
  },
  Correo: {
    type: String,
    index: {
      unique: true,
    },
  },
  Nombre: String,
  Apellido: String,
  Tipo_Usuario: String,
  Password: String,
}, {
  timestamps: true, // created_at, updated_at
});

// Model
const UserModel = mongoose.model('Usuario', UsuarioSchema);
module.exports = { UsuarioSchema, UserModel };
