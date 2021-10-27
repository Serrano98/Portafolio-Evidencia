const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Definition
const Metodos_PagoSchema = new Schema({
  ID_Metodos_Pago: {
    type: Number,
    index: {
      unique: true,
    },
  },
  Metodo_Pago: String,
  Descripcion_Matodo_Pago: String,
});

// Model
const UserModel = mongoose.model('Metodos_Pago', Metodos_PagoSchema);
module.exports = { Metodos_PagoSchema, UserModel };
