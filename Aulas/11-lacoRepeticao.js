//Laço de repetição - FOR

// O professor te colocou de castigo e pediu para você escrever mil vezes a frase "Eu vou prestar atenção às aulas"

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas");
}

// Escreva todos os números de 1 a 20 com loop for

console.log("-------------------------------");

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Mostre no console do sistema os números pares entre 1 e 20

console.log("-------------------------------");

for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//Dado um vetor, calcule e exiba o somatório do seus elementos

console.log("-------------------------------");

var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos elementos:", soma);

//Dado um vetor, calcule e exiba a quantidade de pares e de impares

console.log("-------------------------------");

var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de pares:", impares);

//Dado um vetor, multiplique todos os seus elementos por 3 com laço FOR

console.log("-------------------------------");

var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
console.log("Original:", numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("Multiplicado por 3:", numeros);

//Dada uma matriz 2x3, mostre ao usuario todos os seus elementos com as respectivas posições

console.log("-------------------------------");

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(
      "Matriz[",
      linha,
      "]",
      "[",
      coluna,
      "] =",
      matriz[linha][coluna]
    );
    console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    //console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

//---------------------------Laço de Repetiçao - While / Do While---------------------------
//While teste a condição antes de entrar no laço de repetição
//Se a condição for inicialmente falsa, o laço não é executado nenhuma vez

console.log("-------------------------------");

var t = 10;

while (t >= 10) {
  console.log("Entrei no laço while...");
  t = 8;
}
console.log("Terminei!");

//Exemplo de While com escrita de 100 linhas

console.log("-------------------------------");

var i = 0;

while (i <= 100) {
  console.log(`Escrita de linha ${i}`);
  i++;
}

//Laço repetição While
//While(condição){
//fragmentos e código
//fragmentos e código
//fragmentos e código
//contador++ | nesta parte o contador é a variavel de controle de acesso
// }
//Exemplo que funciona somente no navegador

//console.log("-------------------------------");

//var senhaCorreta = "1234";
//var tentativa = "";

//while (tentativa !== senhaCorreta) {
//tentativa = prompt("Digite a senha:");
//}

//console.log("Acesso concedido!");

//Do - While testa a condição somente no final do laço de repetição
//Sendo assim, qualquer que seja a condição, o laço é executado pelo menos uma vez

console.log("-------------------------------");

var x = 10;

do {
  console.log("Entrei no laço Do - While...");
  x = 0;
} while (x > 10);

console.log("Terminei!");

