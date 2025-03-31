import { URL } from 'url';

let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    let returnValue = {
        host: "",
        pathname: "",
        parameters: {}
    };
    
    try {
        const urlObj = new URL(laURL);
        returnValue.host = urlObj.protocol + "//" + urlObj.host;
        returnValue.pathname = urlObj.pathname;
        returnValue.parameters = Object.fromEntries(urlObj.searchParams.entries());
    } catch (error) {
        console.error("Error al parsear URL:", error);
    }
    
    return returnValue;
}