//Se le proporcionará un array de objetos que representan datos sobre los 
//desarrolladores que se han inscrito para asistir a la próxima reunión.
//Dado el siguiente array de entrada:
/*let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];*/
//Escribe una función que:
//Agregue la propiedad question a cada objeto del array de entrada donde el desarrollador 
//no ha proporcionado los detalles relevantes (aquellas propiedades en las que el valor
// es null ). El valor de la propiedad question debe ser el siguiente string:
//Hi, could you please provide your <property name>.
//2 . La función debe retornar sólo los desarrolladores con detalles faltantes:
/*[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]*/
//Manipular objects (key | value)
// debo agregar la propiedad question a cada objeto del array en donde el valor sea null
// el valor question debe ser un string, si falta el "firstName", el valor de 
//"question" debe ser 'Hi, could you please provide your firstName?'.
//la funcion debe retornar solo lo que tengan faltantes q tendrán question
// debe retornar un nuevo array

function askMissing(list){
 // acá creo un nuevo array, es lo que debe retornar
  let newList = [];

  // utilice el ciclo for para recorrer cada elemento del array
  for(let i = 0; i < list.length; i++){
    // acá utilice otro for q recorre las propiedades de cada objeto
    for(let prop in list[i]){
      //si el valor de la propiedad es igual a null
      if(list[i][prop] === null){
        //cree otra variable con una copia del objeto actual
        let newObj = { ...list[i] };
        //acá estoy agregando la nueva propiedad al objeto
        newObj.question = `Hi, could you please provide your ${prop}.`;
        //le envío al nuevo array los objetos que tienen el valor null
        newList.push(newObj)
        
        }
      }
    }
    return newList
  }




console.log(askMissing([
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Java'},
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]))


