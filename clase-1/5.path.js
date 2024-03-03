const path = require('node:path');

`./content/subfolder/test.txt`; // X mala practica, esta prohibido por el sistema operativo
// -> unix /
// -> windows \

// -> OJO: barra sepadora de carpetas según S.O
console.log(path.sep);

// unir rutas con path.join -> Esto es una buena práctica
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// .basename -> nos da el nombre del fichero, nos va a conseguir de una ruta el nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

// -> Aqui con '.txt', aquí nos da el nombre del fichero, pero quita el .txt (quita la extesion)
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

// Unos de los más útiles del path es la "extesion"
const extesion = path.extname('image.jpg');
console.log(extesion); // -> Aquí nos da la extesion, definitiva que va al final
