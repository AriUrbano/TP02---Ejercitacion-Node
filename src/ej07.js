import { getCurrencyByCountry } from 'currency-map-country';

let monedaDelPais, codigoPais;

function obtenerMoneda(codigo) {
    let returnValue = null;
    try {
        const moneda = getCurrencyByCountry(codigo);
        returnValue = moneda ? moneda.code : null;
    } catch (error) {
        console.error("Error al obtener moneda:", error);
    }
    return returnValue;
}


codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);