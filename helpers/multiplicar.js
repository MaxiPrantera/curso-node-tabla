const color = require('colors');
const fs = require('fs'); //con esto grabo en un archivo


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    try {

        let salida, consola = '';
    
        for(let i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} = ${base * i}\n`;

        }

        if(listar){
            console.log('=======TABLA DEL: ======'.blue, base);
            console.log(consola);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return`tabla del ${base} creado`;

    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo : crearArchivo
}