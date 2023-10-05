// Crear dos funciones (leftRotations y rightRotations) que retornan 
//todas las rotaciones de izquierda y derecha de un string.
//por cada iteración voy rotando una palabra


// leftRotations("abc") ➞ ["abc", "bca", "cab"]
// rightRotations("abc") ➞ ["abc", "cab", "bca"]
// leftRotations("abcdef") ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]
// rightRotations("abcdef") ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

// un metodo que me pase de string a array
// realizar un bucle por cada iteración cambie los caracteres


function leftRotations(character){
    // inicializamos el array con el parametro
     let newArray = [character];
     let aux = '';

     // acá se coloco el -1 para q no itere con el primer elemento q se inicio 
     // ya que el ejercicio no me lo pide
     for( let i = 0; i < character.length - 1; i++ ){
        // el slice en la posicion 1 me devuelve para palabra sin la primera letra
        // con el charAt me devuelve la primera letra que quiero que este de ultima
        aux = newArray[i].slice(1) + newArray[i].charAt()
        // de acuerdo a cada iteracion me devuelve la palabra y la voy agregrando al array
        newArray.push(aux)
     }
     return newArray;
}
//console.log(leftRotations('adc'))

function rightRotations(str){
    let newArray = [str];
    let aux = '';
    let index = str.length - 1

    for(let i = 0; i < index; i++){
        aux = newArray[i].charAt(index) + newArray[i].slice(0, index)
        newArray.push(aux)
    }
    return newArray
}

console.log(rightRotations('adc'))