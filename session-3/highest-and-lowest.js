//Crear una función que dado un string de números separados por 
//espacios retorne el número mayor y menor.

//Ejemplos
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Importante
// Al menos un número estará presente en el string de entrada.
//El string retornado por la función debe estar compuesto por 
//dos números separados por un único espacio, y el número mayor va primero.

// lo primero que retorne el numero mayor y menor
// si de primeras recibo el string con espacios ideal que quite los espacios
// despues que realice la iteración buscando el numero mayor y menor
//despues que retorne el resultado con un espacio
 //let newNum = num.replaceAll(' ', '')
function highAndLow(num){
   
    let newNum = num.split(" ")
    let numMax = Math.max(...newNum)
    let numMin = Math.min(...newNum)

    return `${numMax} ${numMin}`

    //return `${Math.max(...newNum)} ${Math.min(...newNum)}`
}

//console.log(highAndLow("1 2 -3 4 5"))

function highAndLow2(num){
   // transforma o convierte un string a un numero entero el parseInt
    let newNum = num.split(" ").map(str => parseInt(str))
    // console.log(newNum)
    // console.log(num.split(" "))
    let maxNum = 0;
    let minNum = 0;

    for(let i = 0; i < newNum.length; i++){
// max = 9 y min = 3
        if(newNum[i] > maxNum){
            maxNum = newNum[i]
        } else if(newNum[i] < minNum){
            minNum = newNum[i]
        } 
    }
    return maxNum.toString() + ' ' + minNum.toString()
}
console.log(highAndLow2("-1 2 -2 7 0"))
//console.log(highAndLow2("1 9 3 4 -5"))