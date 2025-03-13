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

/*Estourando o cartão - versão While - utlizando o navegador
1. Crie uma variavel e solicite ao usuario o seu nome;
2. Crie uma variavel e solicite ao usuario o seu banco;
3. Crie uma variavel e solicite ao usuario o sua agencia;
4. Crie uma variavel e solicite ao usuario o numero da conta;
5. Crie uma variavel e solicite ao usuario o saldo da conta;
6. Exiba ao usuario os dados e o saldo da conta;
7. Efetue e exiba ao usuario 5 movimentações na conta utilizando o laço While com valores aleatórios; 
8. Exiba ao usuario novamente os dados e o saldo da conta;
*/

/*var nome = prompt("Informe seu nome:");
var banco = prompt("Informe seu banco");
var agencia = prompt("Informe sua agencia:");
var numeroConta = prompt("Informe o Numero de sua conta:");
var saldo = prompt("Informe seu saldo:");

console.log(
  `Olá: ${nome}! | Seu banco é: ${banco}! | Sua agência é: ${agencia} | O numero de sua conta é: ${numeroConta} | O seu saldo é: ${saldo}`
);

var contador = 1;
while (contador <= 5) {
  let gasto = Math.random() * 100; //Valor aleatório entre 0 até 99.9999...
  saldo -= gasto;
  contador++;
}
console.log(saldo.toFixed(2)); //Deixa o valor decimal com duas casas após a virgula

console.log(
  `Olá: ${nome}! | Seu banco é: ${banco}! | Sua agência é: ${agencia} | O numero de sua conta é: ${numeroConta} | O seu saldo é: ${saldo.toFixed(
    2
  )}`
);
*/
