// La función `printArrayStar(num)` dentro `stars.js` 
// retorna un `array []` de strings que representa la estrellas (\*) 
// sumadas consecutivamente desde 1 hasta `num`
// **Ejemplo**
// ```js
// printArrayStar(0)-- > [];
// printArrayStar(1)-- > ["*"];
// printArrayStar(2)-- > ["*", "**"];
// printArrayStar(3)-- > ["*", "**", "***"];
// ```
// **Nota**
// - `num` es un numero entero >= 0 (no negativo)

function printArrayStar(num){
    if(num <= 0) return [];

    let star = '*';
    let acumuladorString = '';
    let acumuladorArray = [];

    for(let i = 0; i < num; i++){
        acumuladorString = acumuladorString + star;
        acumuladorArray.push(acumuladorString)
    }

    return acumuladorArray;
}

console.log(printArrayStar(3))