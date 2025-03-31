import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

let resultado = null;

async function testOMDB() {
    console.clear();
    
    resultado = await OMDBSearchByPage("cars", 1);
    console.log("OMDBSearchByPage:", resultado);
    
    resultado = await OMDBSearchComplete("matrix");
    console.log("OMDBSearchComplete - Cantidad total:", resultado.cantidadTotal);
    
    if (resultado.datos.length > 0) {
        const imdbID = resultado.datos[0].imdbID;
        resultado = await OMDBGetByImdbID(imdbID);
        console.log("OMDBGetByImdbID:", resultado);
    }
}

testOMDB();