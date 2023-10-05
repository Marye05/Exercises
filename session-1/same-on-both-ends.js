
// del texto saber si la primera y ultima letra o caracter de cada palabra coincide
// cuantas coincidencias hay
// cuantas palabras hacen match con su primer y ultimo caracter
function countSameEnds(str){
   // el regex me devuelve un arra solo con las palabras y espacios
    const regex = /[a-zA-Z\s]/g;
    //se pasa todo a minusculas para cuando haga la comparacion del 
    // primer y ultimo caracter coincidan, en eso me facilita el trabajo
    //el match para devolver todas las ocurrencias de un regex
    // el metodo match me retorna un array por eso se utiliza el join
    // se utilizo el join para unir todos los elementos q están dentro de un array
    // y se utilizo el split para separar 
    const newString = str.toLowerCase().match(regex)
    const newArray = newString.join('').split(' ');
    //["Pop", "goes", "the", "balloon"]
    let count = 0;
// un contador

    for(let i = 0; i < newArray.length; i++){
      console.log(newArray[i])
       if(newArray[i].length == 1){ continue; } 
       // la idea de newArray si tiene un solo caracter q continue xq no se va analizar una sola

       let newStr = newArray[i]
       let firstChar = newStr.charAt(0)
       let lastChar = newStr.charAt(newStr.length - 1)
       //para asignar string con el que vamos a trabajar
       if(firstChar == lastChar){
         // el contador solo va a sumar si hay coincidencias
            count += 1
       }
    } 
    
   return count;
}



//const paragraph = "And the crowd goes wild!"
const paragraph = "éé moom Non I am not in a gang."
//const paragraph = "Pop! goes the balloon";
console.log(countSameEnds(paragraph))

