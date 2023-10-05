//El objetivo es crear una función que elimine el primer y último carácter 
//del string. La función tiene como parámetro un string 'str'. 
//No tienes que preocuparte por cadenas con menos de dos caracteres.
//Ejemplos
//removeChar('eloquent') ➞ 'loquen';
//removeChar('country') ➞ 'ountr';

function removeChar(str){
    //acá aplique slice para remover el primer caracter y de acuerdo a su longitud el ultimo
    // let newStr = str.slice(1, str.length - 1)
    // return newStr
    let str1 = '';
    for(let i = 0; i < str.length; i++){
        str1 = str.slice(1, i)
    }
    return str1
}
console.log(removeChar('mariam'))
//console.log(removeChar('country'))