//utilizar un loop
//extraer la primera letra de cada nombre
// ordenarlos alfabeticamente
// pasarlo a mayuscula
//societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"


function societyName(character){
    let newArray = character.sort()
    let newChar = '';
    for(let i = 0; i < newArray.length; i++){
        newChar += newArray[i].charAt(0)
        
    }
    return newChar.toUpperCase()
    
}

console.log(societyName(["adam", "sarah", "malcolm"]))

