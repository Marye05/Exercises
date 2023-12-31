//Dado un arreglo con números enteros.
//Retorna un arreglo, donde el primer elemento es el conteo todos 
//los números positivos y el segundo elemento es la suma de números negativos.
//En caso de que el arreglo de entrada esté vacío o sea nulo, retorna un arreglo vacio.
//Ejemplo
//Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
//Salida: [10, -65]
//Explicacion: contaremos cuantos números positivos hay para la posición 0  del 
//arreglo y para la posición 1 sumaremos todos los números negativos y como resultado 
//tendremos [10, -65]
//Importante ❗
//Considera las reglas sobre una entrada null

function countPositives(str){
    // primero verifico si es nulo o cero me retorne el array vacio
    if(str === null || str.length === 0){
        return [];
    }

    const positive = str.filter(num => num > 0).length;
    //el reduce para sumarlos y obtener la suma de los números negativos
    const negative = str.filter(num => num < 0).reduce((sum, num) => sum + num, 0);

    return [positive, negative];

}

console.log(countPositives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
