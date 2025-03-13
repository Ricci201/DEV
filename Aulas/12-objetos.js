//------------------------------------------OBJETOS EM JAVASCRIPT------------------------------------------
// Definindo uma classe em javascript (Pessoa)

// 1- Classe (O molde dos objetos) - singular

// class Pessoa {
//   // Criamos uma classe chamada Pessoa (o molde)
//   constructor(pNome, pIdade) {
//     // O construtor é como um formulario
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
// }

// 2- Objeto: Criando um personagem/aluno
// var aluno1 = new Pessoa("Lucas", 22); //criamos um aluno Lucas com 22 alunos
// aluno1 é um objeto baseado no molde Pessoa

// 3- Metodos - Ações que um objeto pode fazer

class Pessoa {
  // Criamos uma classe chamada Pessoa (o molde)
  constructor(pNome, pIdade) {
    // O construtor é como um formulario
    this.nome = pNome;
    this.idade = pIdade;
  }

  apresentarSe() {
    console.log(`Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++; //Aumenta 1 ano
  }
}

var aluno1 = new Pessoa("Lucas", 22);
aluno1.apresentarSe(); // Oi meu nome é Lucas, e eu tenho 22 anos.
aluno1.envelhecer();
aluno1.apresentarSe();

//Class: Molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol

//Objeto: Uma instancia real do modelo, como Lucas ou Neymar

//Atributo: Caracteristica do objeto, como nome e idade

//Metodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer

//--------------------------------------------------------------------------------------------
// Crie uma class para jogador de futebol onde tenha nome, idade e posição
// o objeto de criação com base no jogadorde futebol poderá apresentar-se
// da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na
// posição "Atacante"
// Crie 3 objetos e faça com que eles se apresentem

class Jogador {
  constructor(jNome, jIdade, jPosicao) {
    this.nome = jNome;
    this.idade = jIdade;
    this.posicao = jPosicao;
  }

  apresentarSe(time) {
    console.log(
      `Olá meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.posicao} e jogo no ${time}`
    );
  }

  envelhecer() {
    this.idade++;
  }
}

console.log("------------------------------------------------------");

var jogador = new Jogador("Neymar", 33, "Atacante");
jogador.apresentarSe();
jogador.envelhecer();
jogador.apresentarSe();

//--------------------------------------------------------------------------------------------
//Criando classe Retângulo

class retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

console.log("------------------------------------------------------");

var ret = new retangulo(10, 15);
console.log(ret);
//Apresentando valores (atribuitos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);
//Apresentando a area
console.log(`Área: ${ret.obterArea()}`);

//Alterando o comprimento do retangulo

console.log("------------------------------------------------------");

ret.alterarComprimento(20);
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

//ALterando a largura do retangulo

console.log("------------------------------------------------------");

ret.alterarLargura(30);
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

//Calculando a area

console.log("------------------------------------------------------");

console.log(`Área: ${ret.obterArea()}`);

/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor, preço e tamanho (P / M / G)
Crie um sorvete de chocolate pequeno
Crie um sorvete de morango grande
Altere o preço do sorvete de morango grande para R$ 10,51
ALtere o tamanho do sorvete de pistache médio para grande
*/

class sorvete {
  constructor(sSabor, pPreco, tTamanho) {
    this.sabor = sSabor;
    this.preco = pPreco;
    this.tamanho = tTamanho;
  }
}

console.log("------------------------------------------------------");

var sorvete1 = new sorvete("Chocolate", 3.5, "P");
var sorvete2 = new sorvete("Morango", 3.5, "G");
var sorvete3 = new sorvete("Pistache", 5, "M");

console.log(
  `Sorvete escolhido: ${sorvete1.sabor} | ${sorvete1.tamanho} | Valor: R$ ${sorvete1.preco}`
);

console.log("------------------------------------------------------");

sorvete2.preco = 10.51;
console.table(sorvete2);

console.log("------------------------------------------------------");

sorvete3.tamanho="G"
console.table(sorvete3);
