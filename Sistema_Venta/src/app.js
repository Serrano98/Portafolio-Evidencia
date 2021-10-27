require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
const connectMongoDB = () => mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Welcome route
app.get('/', (req, res) => {
  return res.json({
    message: 'Sistema De Venta',
  });
});

connectMongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Sistema de Venta ${process.env.PORT}`);
  })
});