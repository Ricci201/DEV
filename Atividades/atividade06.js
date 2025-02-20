// **********************************************************************
//                        Lista de exercicio
// **********************************************************************

// 1. Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil
// Regras para votação no Brasil:
// Menores de 16: Não podem votar
// Entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo
// Entre 18 e 70 anos: O voto é obrigatório

const podeVotar = (idade) => {
  if (idade < 16) {
    return "Você não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return " Você pode votar!";
  } else {
    return "Voto facultativo!";
  }
};

var nome = ["Ygona", "Lucas", "Batata", "Fernanda", "Cristiane"];

console.log("Olá", nome[0], "você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "você tem 16 anos e", podeVotar(22));
console.log("Olá", nome[2], "você tem 16 anos e", podeVotar(70));
console.log("Olá", nome[3], "você tem 16 anos e", podeVotar(12));
console.log("Olá", nome[4], "você tem 16 anos e", podeVotar(67));
