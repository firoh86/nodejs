// Para usar las funciones de este archivo node necesita usar un objeto para exportar dichas funciones, palabra reservada exports.funcion=funcion;
// Para exportar un objeto que ya contenga varias propiedades, usariamos el método reservado module.exports=objeto
// module.exports, tambien te permite exportar otras cosas como funciones
const Math = {};

const add = (x1, x2) => {
  return x1 + x2;
};
const substract = (x1, x2) => {
  return x1 - x2;
};
const multiyply = (x1, x2) => {
  return x1 * x2;
};
const divide = (x1, x2) => {
  if (x2 === 0) {
    console.log("nose puede dividir por 0");
  } else {
    return x1 / x2;
  }
};
// asignamos propiedades al objeto math
Math.add = add;
Math.substract = substract;
Math.substract = substract;
Math.substract = substract;
// para exportar un objeto que ya contenga las propiedades
module.exports = Math;

// module.exports tambien te permite exportar funciones,etc...

/* const hello = name => {
  console.log("hola", name);
};

module.exports = hello; */

// exportacion me funciones por separado
/* exports.add = add;
exports.substract = substract;
exports.substract = multiyply;
exports.substract = divide; */
