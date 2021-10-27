const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DireccionSchema = new Schema({
  ID_Usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  ID_Direccion: {
    type: String,
    index: {
      unique: true,
    },
  },
  Calle: String,
  Numero_Ext: Number,
  Numero_Int: Number,
  Colonia: String,
  Municipio: String,
  Ciudad: String,
  Pais: String,
  CP: Number,
  Telefono: Number,
}, {
  timestamps: true,
});

const DireccionModel = mongoose.model('Direccion', DireccionSchema);
module.exports = { DireccionSchema, DireccionModel };