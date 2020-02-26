// los modulos nativos de node los puedes encontrar con especificaciones técnicas en https://nodejs.org/docs/latest-v10.x/api/os.html
// los modulos se importar con require y sin rutas puesto que pertenecen al pack de node js y normalmente lso vas a guardar en una constante del mísmo nombre
const os = require("os");

console.log(os.cpus());
console.log(os.networkInterfaces());
console.log("total mem:", os.totalmem(), "bytes");
console.log("free mem:", os.freemem(), "bytes");
