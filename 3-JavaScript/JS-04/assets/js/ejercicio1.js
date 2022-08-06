//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

let fila=["Sofia", "David", "Juan"];
console.log(fila);
//Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

fila.splice(3,0, "Sara", "Agustin");
fila.shift();
console.log(fila);


//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

fila.splice(0,0, "Renata");
fila.splice(5,0, "Elena");
console.log(fila);