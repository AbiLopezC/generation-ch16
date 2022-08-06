//Write a JavaScript program to construct the following pattern, using a nested for loop.
/* 

*  
* *  
* * *  
* * * *  
* * * * *

*/

function piramide(pisos){
    for(let x=0; x<=pisos; x++)
    {
        let patron= ` `;
        for (let i = 0; i < x; i++) {
            patron= patron+ ` ` + `*`;
            
        }
        console.log(patron );
    }
}

piramide(5);