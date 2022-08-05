//Write while loops to do the following:
/* 
– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
*/
/* let xValue= parseInt( prompt("ingrese un numero del 1 al 5"));
console.log(xValue);

while(xValue>0)
{
    xValue=xValue-0.5;
    console.log(xValue.toFixed(1));

}
 */
//- Print all the odd numbers between 1 - 100.
//impares

/* let numero=0;
while(numero<100)
{
    numero=numero+1;
    if(numero%2 !=0){
        console.log(numero);

    }
}
 */

/* - Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6] */

/* let numero2= parseInt (prompt("ingrese un numero"));
console.log(`[${numero2}]`);
while(numero2>0){
    numero2-=1;
    console.log(`[ ${numero2}]`);
} */


/* 
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/


let numero3= parseInt(prompt("ingrese un numero"));
let sum=0;
let cuenta=1;
while( cuenta <= numero3)
{
    
    sum=sum + cuenta;
    cuenta=cuenta+1;

}
console.log(sum);