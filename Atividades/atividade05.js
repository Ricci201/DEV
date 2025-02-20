// **********************************************************************
//                        Exercicios Vetor Matriz
// **********************************************************************

// 1. Crie uma função que receba como parametro o ano de nascimento de uma pessoa e retorna a idade
function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("Nome:", nome, "\nNasceu no ano:", ano, "e tem", idade, "anos");
}
nascimento("Lucas", "2008");

// 2. Crie uma função que receba a quantidade de combustivel de um carro e retorne quantos kms ele pode viajar com esse combustivel. Considere que o veiculo faz uma média de 12km/L

console.log("------------------------------------------------------");
const combustivel = (Litros) => {
  return Litros * 12;
};

var car1=20
var car2=8
var car3=2

console.log("Carro 1:", car1, "->", combustivel(car1), "kms.");
console.log("Carro 1:", car2, "->", combustivel(car2), "kms.");
console.log("Carro 1:", car3, "->", combustivel(car3), "kms.");