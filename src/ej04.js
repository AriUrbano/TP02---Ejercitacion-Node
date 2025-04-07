import fs from 'fs/promises';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

async function copiar(origen, destino) {
    let returnValue;
   
        const contenido = await fs.readFile(origen, 'utf-8');
        await fs.writeFile(destino, contenido);
        returnValue = `Archivo copiado de ${origen} a ${destino}`;
    }
    return returnValue;
