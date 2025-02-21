/***************************************************** 
                Lista de Exercícios 
*****************************************************/

//Dada matriz abaixo, faça um programa em JavaScript que exiba ao usuario os elementosda sua diagonal principal

// |  3  5  8  |
// |  1  9  2  |
// |  7  1  4  |

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.log("-------------------------------");

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

//Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação
// |  3  5  8  |
// |  1  9  2  |
// |  7  1  4  |

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.log("-------------------------------");

var x = 4;
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
    console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

console.table(matriz);

//Faça um loop FOR onde apresente os numeros impares de 0 a 100
//Não pode ser resolvido com conta ou resto de divisão

console.log("-------------------------------");

console.log("Numeros impares de 0 a 100")
for (let i = 1; i <= 100; i+=2) {
  console.log(i);
}

console.log("-------------------------------");

console.log("Numeros pares de 0 a 100")
for (let i = 0; i <= 100; i+=2) {
  console.log(i);
}

