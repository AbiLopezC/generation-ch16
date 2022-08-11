const num= 1;

console.log(num);

console.log(2);

setTimeout(()=> {
console.log("hola");
}, 2000 );

console.log(3);

setTimeout(()=> {
    console.log("Adios");
    }, 0 );

console.log(4);

for(let i=0; i<5000; i++){
    console.log("loading");
}

console.log(5);