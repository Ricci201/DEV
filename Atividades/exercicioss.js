// 1. Variáveis e Operações Matemáticas

// 1.  Declare três variáveis numéricas e exiba no console a soma, subtração,
// multiplicação e divisão entre elas.

var numero1 = 2;
var numero2 = 3;
var numero3 = 4;

console.log("Primeiro numero:", numero1);
console.log("Segundo numero:", numero2);
console.log("Terceiro numero:", numero3);

console.log("-------------------------------------------");

console.log("A soma dos 3 numeros é:", numero1 + numero2 + numero3);
console.log("A subtração dos 3 numeros é:", numero1 - numero2 - numero3);
console.log("A multiplicação dos 3 é:", numero1 * numero2 * numero3);
console.log("A divisão dos 3 é:", numero1 / numero2 / numero3);

// 2. Crie três variáveis representando as notas de um aluno e calcule sua
//média. Se a média for maior ou igual a 7, exiba "Aprovado", senão,
//"Reprovado"

var nota1 = 8;
var nota2 = 4;
var nota3 = 6;
var media = (nota1 + nota2 + nota3) / 3;

console.log("-------------------------------------------");

// resultado = media >= 7 ? "Aprovado" : "Reprovado";
// console.log(`O aluno foi ${resultado} | com a média de: ${media} `);
media >= 7 ? console.log(`Aprovado!`) : console.log(`Reprovado!`);

// 3. Dado um salário bruto de R$3.000,00, calcule o salário líquido
// considerando um desconto de 8% de INSS e 5% de imposto de renda

var salario = 3000;

console.log("-------------------------------------------");

console.log(`O valor bruto do salario é de R$ ${salario}`);
console.log(`O valor do desconto do INSS é de R$: ${salario - salario * 0.8}`);
console.log(
  `O valor do desconto do imposto de renda é de R$: ${salario - salario * 0.5}`
);
console.log(`O valor liquido do salario é de R$: ${salario - salario * 0.13}`);

// 4. Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a
// área do círculo (use Math.PI)

var raio = 7;

console.log("-------------------------------------------");

console.log(`O Raio é de ${raio} cm`);
console.log(`A circuferencia do circulo é: ${(2 * Math.PI * raio).toFixed(2)}`);
console.log(`A área do circulo é: ${(Math.PI * raio ** 2).toFixed(2)}`);

// 5. Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece
// desconto progressivo:
// o 5% para compras de 2 unidades;
// o 10% para compras de 3 unidades;
// o 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar
// para cada quantidade

var celular = 1500;

console.log("-------------------------------------------");

console.log(
  `Quando o cliente for comprar 2 celulares a R$ 1.500,00 vai ter um desconto de: R$ ${
    celular - celular * 0.05
  }`
);

console.log(
  `Quando o cliente for comprar 3 celulares a R$ 1.500,00 vai ter um desconto de: R$ ${
    celular - celular * 0.1
  }`
);

console.log(
  `Quando o cliente for comprar 4 celulares ou mais a R$ 1.500,00 vai ter um desconto de: R$ ${
    celular - celular * 0.15
  }`
);

// 2. Estruturas Condicionais (IF, ELSE)

// 6. Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou
//múltiplo de ambos

console.log("-------------------------------------------");
var numeros = 5;

{
  if (numeros % 3 == 0 && numeros % 5 == 0) {
    console.log(`${numeros} é multiplo de 3 e 5`);
  } else if (numeros % 5 == 0) {
    console.log("Multiplo de 5");
  } else if (numeros % 3 == 0) {
    console.log("Multiplo de 3");
  }
}

// 7. Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4
//e não por 100, exceto se for divisível por 400)

var ano = 2024;

console.log("-------------------------------------------");

console.log(`Ano: ${ano}`);
ano % 4 == 0 && ano % 100 > 0
  ? console.log("Ano bissexto!")
  : console.log("Ano não bissexto!");

// 8. Dado um número de 0 a 6, exiba o dia da semana correspondente (0 =
//Domingo, 1 = Segunda...)
var dia = 3;

console.log("-------------------------------------------");

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sabado");
    break;
}

// 9. Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será
// multado. Para cada km acima do limite, a multa custa R$5,00. Determine o
// valor da multa para um carro a 95km/h

var limite = 80;
var quantoKmEleEstava = 95;

console.log("-------------------------------------------");

if (quantoKmEleEstava > limite) {
  console.log(
    `O limite da estrada para os veiculos é de: ${limite} km/h, | Já o carro em que sera multado por estar acima da média esta a:${quantoKmEleEstava} km/h, | O valor da multa será R$ ${
      (quantoKmEleEstava - limite) * 5.0
    }  `
  );
}

// 10. Crie um programa que, dado o preço de um produto, aplique um desconto
// conforme a seguinte tabela:
// o Menos de R$50,00: sem desconto.
// o Entre R$50,00 e R$100,00: 5% de desconto.
// o Acima de R$100,00: 10% de desconto.

var desconto = 100;

console.log("-------------------------------------------");

if (desconto < 50) {
  console.log(
    `Caro cliente sua compra custou R$ ${desconto}, sem nenhum desconto!`
  );
} else if (desconto > 50 && desconto <= 100) {
  console.log(
    `Caro cliente sua compra custou R$${
      desconto - desconto * 0.05
    }, com um desconto de 5%!`
  );
} else if (desconto > 100) {
  console.log(
    `Caro cliente sua compra custou R$${
      desconto - desconto * 0.1
    }, com um desconto de 10%!`
  );
}

// 3. Laços de Repetição (FOR, WHILE)

// 11. Exiba todos os números pares entre 1 e 50.

console.log("-------------------------------------------");

for (let i = 1; i <= 50; i++) {
  i % 2 == 0 && console.log(i);
}

// 12. Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10).

console.log("-------------------------------------------");

var x = 9;
var i = 1;

while (i <= 10) {
  console.log(`${x} x ${i} = ${9 * i}`);
  i++;
}

// 13. Some os números de 1 a 100 e exiba o resultado

console.log("-------------------------------------------");

var soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log("Soma dos elementos:", soma);

// 14. Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos

console.log("-------------------------------------------");

var array = [3, 5, 7, 9, 11];
console.log(array.length);
var elementos = 0;

for (let i = 0; i < array.length; i++) {
  elementos += array[i];
}
console.log("Soma dos elementos:", elementos);

// 15. Crie um contador regressivo que comece em 10 e exiba cada número até 0

console.log("-------------------------------------------");

var regressivo = 0;

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 4. Vetores e Manipulação de Strings

// 16. Crie um array com os dias da semana e exiba a quarta-feira

var day = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
console.table(day);
console.log(day[3]);

// 17. Crie um array com cinco frutas e remova a terceira fruta da lista

var fruta = ["Banana", "Maça", "Uva", "Morango", "Kiwi"];

console.log("-------------------------------------------");

console.table(fruta);

fruta.splice(2, 1);

console.table(fruta);

// 18. Crie um array de números e exiba apenas os números maiores que 10

var number = [8, 9, 87, 16, 0, 19];
var maior10 = array.filter((num) => num > 10);

console.log("-------------------------------------------");

console.log(`Numeros maiores que 10: ${maior10}`)

// 19. Transforme a string "JavaScript é incrível!" em maiúsculas e exiba no
// console.

var sentence = "JavaScript é incrivel!";

console.log("-------------------------------------------");

console.log(sentence.toUpperCase());

// 20. Dada a string "A vida é bela e cheia de desafios", exiba quantas palavras existem nela

var frase = "A vida é bela e cheia de desafios";
var palavra = "A vida é bela e cheia de desafios".split(" ");

console.log("-------------------------------------------");

console.log("Numeros de palavra na frase é:" + palavra.length, "palavras");

// 5. Desafios Extras

// 21. Dado um vetor [12, 45, 67, 89, 23], exiba o maior número presente nele

var vetor = [12, 45, 67, 89, 23];

console.log("-------------------------------------------");

console.log(vetor);
console.log(vetor[3]);

// 22. Inverta a string "Desenvolvimento" e exiba "otnemivolpsoD"

console.log("-------------------------------------------");

var dev = "Desenvolvimento";
var devI = dev.split("").reverse().join("");

console.log(devI);

// 23. Conte quantas letras "a" existem na frase "Aprender JavaScript é maravilhoso!"

console.log("-------------------------------------------");

var palavra = "Aprender JavaScript é maravilhoso!";
var tamanhoPalavra = palavra.length;
var contar = 0;

for (let i = 0; i < tamanhoPalavra; i++) {
  if (palavra[i] == "a" || palavra[i] == "A") {
    contar++;
  }
}

console.log(`Temos ${contar} letras A`);

//24. Substitua todas as vogais da string "Desenvolvimento Web" por "*"

console.log("-------------------------------------------");

var palavra = "Aprender JavaScript é maravilhoso!";
palavra = palavra.toUpperCase();
var tamanhoPalavra = palavra.length;
var palavraArray = palavra.split("");

for (let i = 0; i < tamanhoPalavra; i++) {
  if (
    palavra[i] == "A" ||
    palavra[i] == "E" ||
    palavra[i] == "I" ||
    palavra[i] == "O" ||
    palavra[i] == "U" ||
    palavra[i] == "É"
  ) {
    palavraArray[i] = "*";
  }
}

palavraArray = palavraArray.join("");
console.log(palavraArray);

// 25. Crie um vetor de 5 números e exiba a média deles

var vetorr = [1, 2, 3, 4, 5];
var soma = 0;

console.log("-------------------------------------------");

for (let i = 0; i < vetorr.length; i++) {
  soma += vetorr[i];
}
console.log(
  `Os numeros são: ${vetorr} sendo o total de ${soma / vetorr.length}`
);

console.log("-------------------------------------------");

console.log("Muito obrigado pela paciência professores!!");
