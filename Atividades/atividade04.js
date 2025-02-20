//**********************************************************************
//                       Exercicios Vetor Matriz
//**********************************************************************

// 1. Crie e imprima um vetor com 5 elementos numéricos
var dados = [1, 2, 3, 4, 5];
console.log(dados); // Esta imprimindo os dados de forma de uma linha
console.table(dados); //Esta imprimindo agora de forma de tabela

// 2. Imprima na tela o 3º elemento do vetor
console.log(dados[3]); //Imprimindo o 3º vetor

// 3. Faça uma cópia de vetor original
var copia = dados.slice(); //Copiando
console.table(copia); //Executando

// 4. Altere o conteudo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original
copia[0] = dados[0] * 2;
copia[1] = dados[1] * 2;
copia[2] = dados[2] * 2;
copia[3] = dados[3] * 2;
copia[4] = dados[4] * 2;
console.table(copia);

// 5. Crie uma matriz 3x3
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];
console.table(matriz);

// 6. Imprima os valores da diagonal principal
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
