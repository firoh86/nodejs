//enrutamiento con express
// servidor
const express = require("express");
const app = express();

// revisar middlewares
app.use(express.json());

// all es una funcion de expres que para cualquier ruta que contenga user en este caso, podemos hacer algo antes de que lleguen a esa ruta
app.all("/user", (req, res, next) => {
  console.log("por aqui paso");
  // res.send("terminado");
  next(); //para que continue con la siguiente ruta
});

// rutas
// get sirve para devolver datos
app.get("/", (req, res) => {
  res.send("PETICION GET RECIVIDA");
});
// post sirve para recibir datos y guardarlo en una base de datos o procesarlos y despues devolver una respuesta a la aplicación
app.post("/about", (req, res) => {
  res.send("PETICION POST RECIBIDA");
});
// actualizar en la base de datos y actualizar en el navagador
app.put("/contact", (req, res) => {
  res.send("PETICION ACTUALIZACION RECIBIDA");
});
// toma la peticion y borra un dato en el servidor y devuelve una respuesta
app.delete("/test", (req, res) => {
  res.send("<h1>PETICION BORRAR RECIBIDA</h1>");
});
// ----------------------------------------------------------------------
// podemos pedir y determinar que son archivos json
app.get("/user", (req, res) => {
  res.json({
    username: "cameron",
    lastname: "howe"
  });
});
// aunque las peticiones tengan el mismo nombre no se pisaran si están usando diferentes metodos http
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("POST REQUEST RECEIVED");
});
// para recibir rutas dinámicas ----------------vale para todos los metodos http / get post put etc...<<<
app.post("/user/:id", (req, res) => {
  console.log(req.body); //cuerpo de la peticion
  console.log(req.params); //parametros de la peticion
  res.send("POST REQUEST RECEIVED");
});
// $ npx nodemon enrutamiento.js para lanzar el servidor con nodemon
//el puerto que queremos que escuche el servidor
app.listen(5000, () => {
  console.log("Server on port 5000");
});
