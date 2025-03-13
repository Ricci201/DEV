//Criar um jogo de cara ou coroa onde faça três rodadas e os valores de cada cara ou coroa saiam aleatoriamente
//O placar das rodadas deverão ser apresentadas da seguinte forma:

var i = 1;
var cara = 0;
var coroa = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? cara++ : coroa++;
  i++;
} while (i <= 3);

console.log("-----------------------------------");
console.log("             PLACAR                 ");
console.log("-----------------------------------");
console.log(`Cara: ${cara}`);
console.log(`Coroa: ${coroa}`);
console.log("------------------------------------");
