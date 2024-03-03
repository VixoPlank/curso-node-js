const fs = require('node:fs');

// en las funciones callbacks siempre el error es el primer parametro en este caso es: 'err'
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio: ', err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
