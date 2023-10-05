// debo recibir una cadena y devolver la misma
// cuando la palabra sea de cinco o más letras debes invertir la palabra


// spinWords("Hey fellow warriors") ➞ "Hey wollef sroirraw"

function spinWords(character){
    // acá se utilizó el split para dividir la cadena en palabras individuales utilizando el espacio
    // y a su vez almacena las palabras en un nuevo array
    // la idea es separar las palabras para usarlas individualmente
    let newArray = character.split(' ')

    // acá inciamos un bucle para recorrer cada palabra en el newArray
    for(let i = 0; i < newArray.length; i++){
        // acá verificamos la logintud de la palabra si es mayor o igual a 5 caracteres
        if(newArray[i].length >= 5 ){
            newArray[i] = newArray[i].split('').reverse().join('')
            // si la palabra tiene 5 o más caracteres se divide la palabra caracteres individuales
            // con el reverse invierte el orden de los caracteres
            // con el join los une nuevamente
        }
    }
// después de verificar todas las palabras se unen todas
// en una sola cadena de texto separadas con espacios en blanco
    return newArray.join(' ')

}

console.log(spinWords("Hey fellow warriors"))