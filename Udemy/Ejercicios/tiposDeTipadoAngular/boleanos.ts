var esNuevo:boolean = false;
var deseaImprimir:boolean = true;
var aceptaDescuento:boolean = (15+18 == 33);

var sonLasListasIguales: boolean = (lista1 != lista2);

var lista1:number = 100;
var lista2:number = 100;

console.log("Este bolean es ",aceptaDescuento)
console.log("ambos boleanos son verdaderos: ", deseaImprimir && aceptaDescuento)
console.log("Las listas son iguales ?", sonLasListasIguales);

var esAlgunaVerdadera:boolean = aceptaDescuento || deseaImprimir || sonLasListasIguales;

var sonTodasVerdaderas:boolean = aceptaDescuento && deseaImprimir && sonLasListasIguales;

console.log("es alguna verdadera ? : ", esAlgunaVerdadera);

console.log("son todas verdaderas ? : ", sonTodasVerdaderas);