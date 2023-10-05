//El código Morse Internacional define un estándar de codificación 
//donde cada letra se traduce a una series de puntos y guiones, como sigue:
// 'a' se traduce a ".-",
// 'b' se traduce a "-...",
// 'c' se traduce a "-.-.", y sucesivamente.
//Por conveniencia, la tabla entera para los 26 caracteres del 
//alfabeto Ingles es dado como se muestra:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.
// ","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
//Dado un arreglo de palabras como strings donde cada palabra puede ser escrita 
//como una concatenación del código Morse de cada letra.
//Por ejemplo, "cab" puede ser escrito como "-.-..--...", el cual es la concatenación 
//de"-.-.", ".-", y "-...".Nosotros llamaremos tal concatenación la transformación de una palabra.
//Retorna el numero de diferentes transformaciones entre todas las palabras del arreglo.
// Ejemplo 1
// entrada
// ["gin","zen","gig","msg"]
// La transformación de cada palabra es
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// Hay 2 diferentes transformaciones "--...-." y "--...--.".
// salida
// 2
// Ejemplo 2
// entrada
// words = ["a"]
// salida
// 1
// Importante
// Cada palabra words[i] esta compuesta de letras minúsculas del Ingles.

// acá debo tomar las palabras escritas en ese codigo, del alfabeto ingles
//saber cuantas palabras hay en cada transformación
// cada letra representa un codigo y se concatenan para formar la palabra
//la cuestión es de acuerdo a cada una de las transformaciones contar cuantas
//transformaciones hay de esos codigo cuantos se parecen si el codigo es .- 
// quiere decir que hay una sola transformación
// abcdefghijklmnopqrstuvwxyz
function uniqueMorse(words){
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = {};
    // ["gin","zen","gig","msg"]
    for(let i = 0; i < words.length; i++){
        let newArray = words[i].split("").map((character) => {
            let index = alphabet.indexOf(character);
            return code[index];
        })
        result[newArray.join('')] = ''
    }
    console.log(Object.keys(result).length)
}

uniqueMorse(["gin","zen","gig","msg"])