/* const palindromo = (palabra) =>{

    let palabraInv= palabra.split("").reverse().join("");

    if (palabra === palabraInv){
        return 'es palindromo'
    } else
    {
        return 'no es palindromo'
    }
 
} */
//operador ternario 
//(condicion) ? versadero: falso
//(condicion) if else
const palindromo = (palabra)=>{

    if(typeof palabra === 'numbrer')
    {return 'no es una palabra';}


let palabraInv = palabra.split("").reverse().join("");

return (palabra === palabraInv) ? 'Es un palindromo' : 'No es un palindromo';
}

console.log(palindromo(1))

module.exports= palindromo;