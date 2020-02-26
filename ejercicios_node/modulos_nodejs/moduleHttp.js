const http = require("http");

// el modulo htp te permite crear un servidor web

// el servidor por defecto va a tener dos posibilidades integradas, el poder hacer peticiones (requests) y el poder recibir respuesta (response)  (req,res)
/* http
  .createServer((req, res) => {
    // vamos a escribir una respuesta predefinida para poder hacer la prueba
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hola mundo desde nodejs</h1>");
    // una vez que recibimos la respuesta vamoa terminarla para que pueda volver a recibir peticiones de otros usuarios
    res.end();

    // vamos a crear el metodo listen, este método listen lo que hace es poder decirle en que puerto va a escuchar mi servidor
  })
  .listen(3000);
 */

//  forma con mejor estructura

const handleServer = (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hola mundo desde nodejs</h1>");
  res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, () => {
  console.log("Server on port 3000");
});
