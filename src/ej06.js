import { URL } from 'url';

function parsearUrl(laURL) {
    let returnValue = {
        host: null,
        pathname: null,
        parameters: null
    };
    
    try {
        const urlObj = new URL(laURL);
        returnValue.host = urlObj.protocol + "//" + urlObj.host;
        returnValue.pathname = urlObj.pathname;
        returnValue.parameters = Object.fromEntries(urlObj.searchParams.entries());
    } catch (error) {
        console.error("Error al parsear URL:", error.message);
    }
    
    return returnValue;
}

// Pruebas
console.log(parsearUrl('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'));
console.log(parsearUrl('url-invalida'));