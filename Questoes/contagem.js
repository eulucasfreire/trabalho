function contagem(numero){
let total = 0;
for (let i = 1; numero >=i; i++){
    total++;
}
return total;
}
console.log(
    contagem(10)
);