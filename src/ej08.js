import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

let resultado = null;

async function testOMDB() {
    console.clear();
    
    resultado = await OMDBSearchByPage("cars", 1);
    console.log("OMDBSearchByPage:", resultado);
    
    resultado = await OMDBSearchComplete("cars");
    console.log("OMDBSearchComplete - Cantidad total:", resultado.cantidadTotal);
    
    try {
        const imdbID = resultado.datos[0].imdbID;
        resultado = await OMDBGetByImdbID(imdbID);
        console.log("OMDBGetByImdbID:", resultado);
    } catch (error) {
        console.error("No se encontraron resultados para mostrar detalles");
    }
}

testOMDB();