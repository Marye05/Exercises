

function noSpace(str){
    // este metodo me reemplaza todas la coincidencias replaceAll
    //return str.replaceAll(' ', '')
    //return str.replace(' ', '') este reemplaza solo la primera coincidencia
    // este metodo replace con el regex funciona para todas las coincidencias
    return str.replace(/\s+/g, '')
   
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))