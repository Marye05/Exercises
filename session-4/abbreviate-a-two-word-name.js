//Escribe una función que convierte un nombre en iniciales. 
//Esta función toma exactamente dos palabras con un espacio entre ellos.
//La salida debe ser dos letras capitalizadas con un punto que las separa.
//Ejemplo 1
//Entrada: Sam Harris //Salida: S.H
//Ejemplo 2
//Entrada: Patrick Feeney //Salida: P.F

//un metodo que recorra las palabras y solo tome la inicial de cada una
// las devuelva en mayusculas y las separe por un punto

function abbreviateName(name){
    //utilizo el split separa la cadena pasandolo a array
    let nam = name.split(' ')
    //recorro todas las palabra con el map para obtener la inicial de cada palabra
    // por eso utilizo el metodo charAt para que me de solo la primera letra
    let str = nam.map(word => word.charAt(0))
    // utilizo el join para unir las letras con un punto
    // y el toUpperCase para poner las letras en mayúsculas
    return str.join('.').toUpperCase()
}

console.log(abbreviateName('marye orozco'))