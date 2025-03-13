/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------


*/
// 1. Par ou Ímpar?

// console.log("------------------------------------------------------");

// const imparpar = (num) => {
//   return num % 2 == 0 ? "O numero é par!" : "O numero é impar!";
// };
// console.log(imparpar(10));
// console.log(imparpar(3));
// console.log(imparpar(2));

// // 2. Tabuada

// console.log("------------------------------------------------------");

// var tabuada = 6;
// console.log(tabuada, "x 1 = ", tabuada * 1);
// console.log(tabuada, "x 2 = ", tabuada * 2);
// console.log(tabuada, "x 3 = ", tabuada * 3);
// console.log(tabuada, "x 4 = ", tabuada * 4);
// console.log(tabuada, "x 5 = ", tabuada * 5);
// console.log(tabuada, "x 6 = ", tabuada * 6);
// console.log(tabuada, "x 7 = ", tabuada * 7);
// console.log(tabuada, "x 8 = ", tabuada * 8);
// console.log(tabuada, "x 9 = ", tabuada * 9);
// console.log(tabuada, "x 10 = ", tabuada * 10);

// // 3. Fatorial de um Número

// console.log("------------------------------------------------------");

// console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

// 4. Soma dos Números de um Array

// console.log("------------------------------------------------------");

// var numeros = [10, 20, 30, 40];
// console.log(numeros[0] + numeros[1] + numeros[2] + numeros[3]);

// // 5. Ordenação de Números

// console.log("------------------------------------------------------");

// var ordemNumero = [8, 3, 5, 1, 9];
// batata.sort();
// console.table(batata);

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

// var nome = prompt("Informe seu nome:");
// var banco = prompt("Informe seu banco");
// var agencia = prompt("Informe sua agencia:");
// var numeroConta = prompt("Informe o Numero de sua conta:");
// var saldo = prompt("Informe seu saldo:");

// console.log(
//   `Olá: ${nome}! | Seu banco é: ${banco}! | Sua agência é: ${agencia} | O numero de sua conta é: ${numeroConta} | O seu saldo é: ${saldo}`
// );

// var contador = 1;
// while (contador <= 5) {
//   let gasto = Math.random() * 100; //Valor aleatório entre 0 até 99.9999...
//   saldo -= gasto;
//   contador++;
// }
// console.log(saldo.toFixed(2)); //Deixa o valor decimal com duas casas após a virgula

// console.log(
//   `Olá: ${nome}! | Seu banco é: ${banco}! | Sua agência é: ${agencia} | O numero de sua conta é: ${numeroConta} | O seu saldo é: ${saldo.toFixed(
//     2
//   )}`
// );

//*********************************************************************
//                  Lista de exercicios MASTER
//*********************************************************************

//Supondo que a população de um pais A seja de a habitantes com uma taxa anual de crescimento de 3% e que a população de um pais B seja de b habitantes, com uma taxa anual de crescimemnto de 1,5%, fazer um algoritmo que calcula e escreva o numero de anos necessarios para que a população do país A ultrapasse ou iguale a população do pais B, mantidas essas taxas de crescimemnto

var a = 150000;
var b = 2560000;
var anos = 0;

console.log("--------------------------------");

do {
  a *= 0.3;
  b *= 0.15;
  anos++;
  console.log(
    `Ano: ${anos} | População A ${Math.round(a)} | População B: ${Math.round(
      b
    )}`
  );
} while (a < b);

console.log(`Serão necessarios ${anos} anos`);

