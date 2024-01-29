const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));

const media = nota1 + nota2 / 2;

if (media >= 6) {
  console.log(`Média ${media}, o aluno foi APROVADO!`);
} else {
  console.log(`Média ${media}, o aluno foi REPROVADO`);
}

// Exercício 1
// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada.
// Utilize essa função para personalizar a experiência de cada usuário.

let nome = prompt("Digite seu nome");
function bemVindo() {
  alert(`Bem vindo ${nome}!`);
}
console.log(bemVindo());

// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar.
//   Retorne true se for par e false se for ímpar.

let numero = Number(prompt("Digite um número: "));
function parOuImpar() {
  if (numero % 2 === 0) {
    alert("O número digitado é par.");
  } else {
    alert("O número digitado é ímpar.");
  }
}
parOuImpar();

// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado.
// Utilize essa função para calcular a média de diferentes conjuntos de números.

function mediaAritmetica(arrayNumeros) {
  if (arrayNumeros === 0) {
    return 0;
  }
  let soma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    soma = soma + arrayNumeros[i]; // Ou soma += arrayNumeros[i]
  }
  const media = soma / arrayNumeros.length;
  return media;
}

const conjunto1 = [10, 20, 30, 40, 50];
const conjunto2 = [5, 15, 25, 35, 45];

const mediaConjunto1 = mediaAritmetica(conjunto1);
const mediaConjunto2 = mediaAritmetica(conjunto2);

console.log(`A média do conjunto 1 é: ${mediaConjunto1}`);
console.log(`A média do conjunto 2 é: ${mediaConjunto2}`);

// Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as
// letras em caixa alta. Utilize essa função para converter diferentes strings.

function converterMaiusculo(str) {
  return str.toUpperCase();
}
const texto = "OLÁ jhonatan, SEJA BEM VINDO!";
const textoJs = "JavaScript é incrivel, VOCÊ VAI SE AMARRAR.";

const resultado1 = converterMaiusculo(texto);
const resultado2 = converterMaiusculo(textoJs);

console.log(resultado1);
console.log(resultado2);

// Exercício 5
// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
function numPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(numPrimo(1)); // Saída: false
console.log(numPrimo(5)); // Saída: true
console.log(numPrimo(10)); // Saída: false
console.log(numPrimo(13)); // Saída: true
console.log(numPrimo(20)); // Saída: false

// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array.
// Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
function inverterArray(array) {
  return array.reverse();
}
const nomes = ["Jheniffer", "Jhonatan", "Helen", "Helena", "Madeira"];
const datasAniversarios = [8, 19, 6, 27, 23];

const iverterNomes = inverterArray(nomes);
const inverterDatas = inverterArray(datasAniversarios);

console.log(`A ordem dos nomes ficou: ${nomes.join(", ")}`);
console.log(
  `A ordem das datas de aniversário ficou: ${inverterDatas.join(", ")}`
);

// Exercício 7
// Crie uma função que receba um valor e uma porcentagem como parâmetros.
// A função deve retornar o valor acrescido da porcentagem indicada.

function somaVarlorPorcentagem(valor, porcentagem) {
  if (porcentagem < 0) {
    alert("A porcentagem não pode ser negativa");
  }
  const acrescimo = (porcentagem / 100) * valor;
  const resultado = valor + acrescimo;
  return resultado;
}
const valorProduto = Number(prompt("Digite o valor do produto: "));
const porcentagemAcrescida = Number(
  prompt("Digite a porcentagem a ser acrescida: ")
);
const novoValor = somaVarlorPorcentagem(valorProduto, porcentagemAcrescida);

alert(
  `O valor original do produtoe é: R$ ${valorProduto}.\nA porcentagem acrescida será de: ${porcentagemAcrescida}%.\nO valor total com acréscimo será de: R$ ${novoValor}.`
);

// Exercício 8
// Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para
// a direita e vice-versa). Retorne true se for um palíndromo e false se não for.
function verificarPalindromo(palavra) {
  // Remove espaços em branco e converte para minúsculas para evitar problemas com espaçamento e maiúsculas/minúsculas
  palavra = palavra.toLowerCase().replace(/\s/g, "");

  // Compara a palavra original com sua versão invertida:
  return palavra === palavra.split("").reverse().join("");
}

const palavraEscolhida = prompt("Digita uma palavra: ");

console.log(verificarPalindromo(palavraEscolhida)); // Saída: true

// Exercício 9
// Implemente uma função que receba um número como parâmetro e retorne sua
// representação binária. Utilize essa função para converter diferentes números em binário.
function decimalParaBinario(numero) {
  // Verificar se a entrada é um número
  if (typeof numero !== "number" || isNaN(numero)) {
    return "Entrada inválida. Por favor, forneça um número válido.";
  }

  // Converter para representação binária
  var binario = numero.toString(2);

  return binario;
}

// Exemplos de uso:
var numero1 = Number(prompt("Digite um número: "));
var resultadoBinario1 = decimalParaBinario(numero1);
alert(`A representação binária de ${numero1} é: ${resultadoBinario1}.`);

// Exercício 10
// Crie uma função que calcule o fatorial de um número.
// Utilize essa função para calcular o fatorial de diferentes números.
function calcularFatorial(numero) {
  // Verificar se a entrada é um número inteiro não negativo
  if (typeof numero !== "number" || numero < 0 || !Number.isInteger(numero)) {
    return "Entrada inválida. Por favor, forneça um número inteiro não negativo.";
  }

  // Caso base: fatorial de 0 é 1
  if (numero === 0) {
    return 1;
  }

  // Calcular o fatorial usando um loop
  var resultado = 1;
  for (var i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}
let numeroUsuario = Number(
  prompt("Digite um número para calcular o seu fatorial: ")
);

let resultadoFatorial = calcularFatorial(numeroUsuario);
alert(`O fatorial de ${numeroUsuario} é ${resultadoFatorial}.`);
