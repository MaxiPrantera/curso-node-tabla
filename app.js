const {crearArchivo} = require('./helpers/multiplicar'); 
const argv = require('./config/yargs');
const color = require('colors'); //para los colores de la terminal




console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log(process.argv); //con esto veo en consola

//const [, ,arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

//const base = 5;



crearArchivo(argv.b, argv.l, argv.h)
   .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
   .catch(err => console.log(err));

//CON ESTO LO GRABE EN EL DISCO!

