const fs = require("fs");
// funcion de nodejs con un callback asincrono
/* fs.writeFile("./texto.txt", "linea uno", err => {
  if (err) {
    console.log(err);
  }
  console.log("archivo creado");
}); */
// este se ejecuta antes que archivo creado, por que node js sigue leyendo el código y se espera a que el sistema cree el archivo para continuar con la función.
console.log("última linea de codigo");

fs.readFile("./texto.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

/* // ejemplo-----------

// En este caso el código esperara a recibir los usuarios.
const users = query("SELECT * FROM Users");
// Pero que hacemos? por que las respuestas de usuarios/peticiones no dependen de node si no de una base de datos

// lo haremos de este modo
// Hacemos la peticion, y como parametro final, creamos un calback para que se ejecute cuando reciba la respuesta a dicha petición
// de forma asincrona y sin necesidad de esperar a la respuesta para seguir ejecutando el programa.
query("SELECT * FROM users", (err, users) => {
  if (err) {
    console.log(err);
  }
  if (users) {
    // tratamiento de la respuesta
  }
});
 */
