// metodo charAt, for, usar el length; 
//You need to create a function that converts the input into this format, 
//with the output being the same string expect there is a pattern of 
//uppercase and lowercase letters.
//input:  "stop Making spongebob Memes!"
//output: "StOp mAkInG SpOnGeBoB MeMeS!"
// Debe crear una función que convierta la entrada a este formato, siendo la salida 
// la misma cadena, excepto que hay un patrón de letras mayúsculas y minúsculas.


function spongeBob(letters){

    let aux = '';

    for( let i = 0; i < letters.length; i++){
        //El paso 1 accedo a cada letra con el charAt
        //aux = aux + letters.charAt(i)
        // paso dos guardar esas letras en la variable aux ''
        // utilizar el modulo % para par e impar 
        // cuando el residuo es 0 es par y cuando el residuo es 1 es impar   
        if (i % 2 == 0){
            aux += letters.charAt(i).toUpperCase()
    
        } else {

            aux += letters.charAt(i).toLowerCase()
        }
        
    } 
    console.log(aux)

}

spongeBob("stop Making spongebob Memes!")