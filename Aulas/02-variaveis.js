// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("------------------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiuscula são diferentes de minusculas)
console.log("Criando uma variavel Teste e tentando acessar com testE.");
let Teste = "variavel teste!";
//console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Podem iniciar com 'A'-'Z', 'a'-'z', '_' ou '$'
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variaveis lógicas (boolean)
var nome = "Gustavo";
var rico = false;
var eProfessor = true;
console.log("Nome", nome, "| É professor?", eProfessor, "| É rico?", rico);
