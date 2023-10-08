//Convertir un hash a un arreglo. Nada mas, nada menos.
//Ejemplo
//Input: { name: 'Jeremy', age: 24, role: 'Software Engineer' }
//Salida: [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
//Importante ❗
//La salida debe ser ordenada alfabéticamente

function convertHas(obj){
    //se utiliza oara obtener las claves del objeto
    // sort ordena alfabeticamente esas claves
    const sortedKeys = Object.keys(obj).sort();
    //utilice al map para crear un nuevo arreglo donde tiene su clave y valor
    const result = sortedKeys.map(key => [key, obj[key]]);
    return result;
}

console.log(convertHas({ name: 'Jeremy', age: 24, role: 'Software Engineer' }))