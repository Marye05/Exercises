// // La funcion `printStars(num)` en el archivo `stars.js` 
// // recibe un parametro `num` como argumento el cual representa 
// // el número de estrellas (\*) que deberá retornar como un `string`.
// // **Ejemplo**
// // ```js
// // printStars(0)-- > "";
// // printStars(1)-- > "*";
// // printStars(2)-- > "**";
// // printStars(5)-- > "*****";
// // ```
// // **Nota**
// // - `num` es un numero entero >= 0 (no negativo)

// function printStars(num){
//     if (num <= 0) return '';

//     let star = '*';
//     let acumulador = '';


//     for(let i = 1; i <= num; i++){
//         //console.log(acumulador)
//         acumulador = acumulador + star;
//     }
//     return acumulador;

// }

// // cuando i es igual a 1 en este ciclo o esta iteración de entrada
// //acumulador es un string vacío y star es un valor fijo
// // primera iteración
// // acumulador = '' + '*' => '*'
// // segunda iteración
// // acumulador = '*' + '*' => '**'
// // tercera iteración
// // acumulador = '**' + '*' => '***'
// // cuarta iteración
// // acumulador = '***' + '*' => '****'
// // quinta iteración
// // acumulador = '****' + '*' => '*****'

// console.log(printStars(30))


function printStars(num){
    let star = '*';
    let acumulador = '';

    for(let i = 0; i < num; i++){
        acumulador = acumulador + star;
    }
    
    return acumulador;
}

console.log(printStars(8))

// estructuras de javascript, loops TAREA explicar cada uno con un ejercicio