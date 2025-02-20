//***************************************************************************************
//                                Lista de exercicios
//***************************************************************************************
// 1. Crie um array de frutas com os seguintes elementos: Banana, maça, pera, uva e morango
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.log(frutas);
console.table(frutas);

// 2. Adicione Tangerina no final
frutas.push("Tangerina");
console.table(frutas);

// 3. Adicione Goiaba no inicio
frutas.unshift("Goiaba");
console.table(frutas);

// 4. Exiba o conteudo do indice 5
console.log(frutas[5]);

// 5. Exclua o elemento uva
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

// 6. Crie uma cópia de array apenas com os elementos com indice 2, 3 e 4
var copia = frutas.slice(2, 5);
console.log("Copiando um array!");
console.table(copia);
