// process -> El objeto 'process' es un objeto global que proporciona información y control sobre el
// proceso actual de ejecución un ejemplo: los argumentos de entrada
// console.log(process.argv); // -> son los argumentos que va a recibir la linea de comandos

// controlar el proceso y su salida
// -> Con (0) todo ha salidos bien y el proceso debe terminar ahí
// -> con (1) a habido un error y queremos que salga
// process.exit(1)

// podemos controlar eventos del proceso
// process.on("exit", ()=>{
//     // limpiar los recursos
// })

// current working directory: nos dice de que carpeta estamos ejecutando el proceso
console.log(process.cwd());

// platform
console.log(process.env); // uno de los que más se utiliza es "variables de enterno"
