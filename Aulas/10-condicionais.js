// Condicional simples com IF

var anoNascimento = 2003;
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// Condições simples com if-Else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes."); //else é o se não
}

// Condições compostas com if

console.log("------------------------------------------------------");

const login = "adimin";
const senha = "12345";

var loginUser = "adimin";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

// Desvio condicional alinhado - IF ELSEIF-ELSE

console.log("------------------------------------------------------");

var semaforo = "vermelho";
if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare!");
}

//Desvio condicional IF com bloco de comandos

console.log("------------------------------------------------------");

var idade = 19;

if (idade <= 18) {
  console.log("Erro no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Criando variaveis locais com "let" (só existe do bloco onde foram criadas)

console.log("------------------------------------------------------");

var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de Agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro");
//console.log(mensagem)

// Criando uma função com desvio condicional IF

console.log("------------------------------------------------------");

const desconto = (valorcompra) => {
  let desconto = 0;

  if (valorcompra >= 1000) {
    desconto = (valorcompra * 12) / 100;
  }
  return desconto;
};

var totalcompra = 950;
console.log(
  "Valor total da compra R$",
  totalcompra,
  "::: Desconto R$",
  desconto(totalcompra)
);
totalcompra = 1800;
console.log(
  "Valor total de compra: R$",
  totalcompra,
  "::: Desconto: R$",
  desconto(totalcompra)
);

// Desvio condicional IF inline (ternário)
//condicao ? expressão_se_verdadeiro : expressão_se_falso

console.log("------------------------------------------------------");

var preco = 500;
var resultado = preco <= 100 ? "Tá barato!" : "Vish, ta muito caro!";

// O operador acima é o mesmo que escrever:
// if(preco <=100){
//   resultado ="Ta barato!"
// }else{
//   resultado="Vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);

// if ternario com somente uma expressão
// condição && expressão

var logado = false;
logado && console.log("Usuario esta logado!");
