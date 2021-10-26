var colors = require('colors');
var os = require('os');
var misCpu = os.cpus();

function sumar(num1, num2) {
  console.log('El resultado de la suma es:'.blue);
  console.log(num1 + num2);
}
module.exports = sumar;
