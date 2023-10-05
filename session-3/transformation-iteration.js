//Escribe una función que reciba dos cadenas como parámetros e iteralas 
//para trasformar la cadena source y termine convertida en la cadena 
//target el resultado de cada iteración guardalo en un arreglo.
// IMPORTANTE
//Deberás retornar un array con los strings correspondientes a cada iteración
//source y target siempre tendrán la misma longitud
//Si una letra de source coincide al momento de iterar 
//con otra letra de target entonces no hay transformación de letras

// transform('car','see') ➞ ["car", "sar", "ser", "see"]
// transform('casa','buho') ➞ ["casa", "basa", "busa","buha","buho"]
// transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
// transform('kata','math') ➞ ["kata", "mata", "math"]

function transform(str1, str2){
    let result = [];

    // en cada iteración se crea una nueva cadena
    for( let i = 0; i < str1.length; i++){
        //agregue str2 de primera ya que se debe iniciar con el primer caracter
        const newStr = str2.slice(0, i) + str1.slice(i)
        // la cadena newStr se agrega a result al array
        result.push(newStr)
    }
    // se agrega al final de la cadena str2 y luego retornamos el array
    result.push(str2);
    return result
}

console.log(transform('car','see'))
// console.log(transform('casa','buho'))
// console.log(transform('floor','brake'))
// console.log(transform('kata','math'))