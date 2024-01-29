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

// Exercícios Adicionais

// Exercício 1
// Crie uma função que receba dois números como parâmetros e retorne a soma deles. Utilize essa função para realizar somas diferentes.

function somarNumeros(num1, num2) {
  return num1 + num2;
}
console.log(somarNumeros(15, 19));
console.log(somarNumeros(405, 32));
console.log(somarNumeros(339, 225));
console.log(somarNumeros(4, 8));

// Exercício 2
// Desenvolva uma função que calcule o valor de um produto com desconto.
// A função deve receber o valor original do produto e o percentual de desconto como parâmetros,
// e retornar o valor com desconto aplicado. Utilize essa função para calcular o valor final de diferentes produtos.

function valorComDesconto(preco, desconto) {
  if (desconto < 0) {
    console.log("O valor do desconto não pode ser menor que 0.");
  } else {
    const valorDesconto = (preco * desconto) / 100;
    const valorFinal = preco - valorDesconto;
    return valorFinal;
  }
}
console.log(valorComDesconto(100, -1));
console.log(valorComDesconto(1500, -25));
console.log(valorComDesconto(1200, 23));
console.log(valorComDesconto(10.999, 18));

// Exercício 3
// Implemente uma função que verifique se uma palavra é um anagrama de outra.
// Um anagrama é uma palavra que pode ser formada a partir de outra, reorganizando suas letras.
// Retorne true se for um anagrama e false se não for.
function saoAnagramas(palavra1, palavra2) {
  const formatarPalavra = (palavra) => palavra.replace(/\s/g, "").toLowerCase();

  const formatada1 = formatarPalavra(palavra1);
  const formatada2 = formatarPalavra(palavra2);

  return (
    formatada1.length === formatada2.length &&
    formatada1.split("").sort().join("") ===
      formatada2.split("").sort().join("")
  );
}

// Exemplo de uso:
const palavraA = "amor";
const palavraB = "roma";

if (saoAnagramas(palavraA, palavraB)) {
  console.log(`${palavraA} e ${palavraB} são anagramas.`);
} else {
  console.log(`${palavraA} e ${palavraB} não são anagramas.`);
}

// Exercício 4
// Crie uma função que receba um número como parâmetro e verifique se ele é um quadrado perfeito.
// Um quadrado perfeito é um número que pode ser expresso como o produto de dois números iguais.
// Retorne true se for um quadrado perfeito e false se não for.
function ehQuadradoPerfeito(numero) {
  // Verificar se o número é negativo
  if (numero < 0) {
    return false;
  }

  // Calcular a raiz quadrada do número
  const raizQuadrada = Math.sqrt(numero);

  // Verificar se a raiz quadrada é um número inteiro
  return raizQuadrada === Math.floor(raizQuadrada);
}

// Exemplo de uso:
const numero1 = 18;
const numero2 = 25;

console.log(
  `${numero1} é um quadrado perfeito? ${ehQuadradoPerfeito(numero1)}`
);
console.log(
  `${numero2} é um quadrado perfeito? ${ehQuadradoPerfeito(numero2)}`
);

// Exercício 5
// Desenvolva uma função que calcule a área de um círculo.
// A função deve receber o raio como parâmetro e retornar a área calculada.
function calcularAreaDoCirculo(raio) {
  // Verificar se o raio é um número positivo
  if (raio <= 0 || typeof raio !== "number") {
    return NaN;
  }

  // Calcular a área do círculo
  const area = Math.PI * Math.pow(raio, 2);

  return area;
}

// Exemplo de uso:
const raioDoCirculo = 10;
const areaDoCirculo = calcularAreaDoCirculo(raioDoCirculo);

if (isNaN(areaDoCirculo)) {
  console.log("Erro: O raio deve ser um número positivo.");
} else {
  console.log(
    `A área do círculo com raio ${raioDoCirculo} é ${areaDoCirculo.toFixed(2)}.`
  );
}

// Exercício 6
// Implemente uma função que receba uma string como parâmetro e verifique se ela é um palíndromo,
// ignorando maiúsculas e minúsculas. Retorne true se for um palíndromo e false se não for.
function ehPalindromo(str) {
  // Remover espaços em branco e converter para minúsculas
  const strFormatada = str.replace(/\s/g, "").toLowerCase();

  // Comparar a string original com sua versão invertida
  const strInvertida = strFormatada.split("").reverse().join("");

  return strFormatada === strInvertida;
}

// Exemplo de uso:
const exemplo1 = "Ame a ema";
const exemplo2 = "Frase qualquer";

console.log(`${exemplo1} é um palíndromo? ${ehPalindromo(exemplo1)}`);
console.log(`${exemplo2} é um palíndromo? ${ehPalindromo(exemplo2)}`);

// Exercício 7
// Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista.

function encontrarMaiorNumero(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "A lista de números é inválida ou vazia.";
  }

  let maiorNumero = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maiorNumero) {
      maiorNumero = lista[i];
    }
  }

  return maiorNumero;
}

// Exemplo de uso:
const numeros = [42, 5, 27, 105, 99, 18];
const maiorNumeroNaLista = encontrarMaiorNumero(numeros);

console.log(`O maior número na lista é: ${maiorNumeroNaLista}`);

// Exercício 8
// Desenvolva uma função que converta uma temperatura de Celsius para Fahrenheit.
// A função deve receber a temperatura em Celsius como parâmetro e retornar a temperatura convertida.
function converterCelsiusParaFahrenheit(temperaturaCelsius) {
  if (typeof temperaturaCelsius !== "number") {
    return "Por favor, forneça uma temperatura válida em Celsius.";
  }

  const temperaturaFahrenheit = (9 / 5) * temperaturaCelsius + 32;
  return temperaturaFahrenheit;
}

// Exemplo de uso:
const temperaturaCelsius = 25;
const temperaturaFahrenheit =
  converterCelsiusParaFahrenheit(temperaturaCelsius);

console.log(
  `${temperaturaCelsius} °C equivalem a ${temperaturaFahrenheit.toFixed(2)} °F.`
);

// Exercício 9
// Implemente uma função que calcule a média ponderada de um conjunto de notas.
// A função deve receber as notas e os respectivos pesos como parâmetros, e retornar a média ponderada.
function calcularMediaPonderada(notas, pesos) {
  // Verificar se as listas têm o mesmo comprimento
  if (notas.length !== pesos.length) {
    return "O número de notas deve ser igual ao número de pesos.";
  }

  // Verificar se notas e pesos são arrays válidos
  if (
    !Array.isArray(notas) ||
    !Array.isArray(pesos) ||
    notas.length === 0 ||
    pesos.length === 0
  ) {
    return "Notas e pesos devem ser arrays não vazios.";
  }

  // Calcular a média ponderada
  const somaProdutos = notas.reduce(
    (acumulador, nota, indice) => acumulador + nota * pesos[indice],
    0
  );
  const somaPesos = pesos.reduce((acumulador, peso) => acumulador + peso, 0);

  if (somaPesos === 0) {
    return "A soma dos pesos não pode ser zero.";
  }

  const mediaPonderada = somaProdutos / somaPesos;
  return mediaPonderada;
}

// Exemplo de uso:
const notas = [8, 9, 7];
const pesos = [2, 3, 1];

const mediaPonderada = calcularMediaPonderada(notas, pesos);

console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);

// Exercício 10
// Crie uma função que receba um número como parâmetro e verifique se ele é um número primo.
// Retorne true se for um número primo e false se não for.
function ehNumeroPrimo(numero) {
  // Verificar se o número é menor ou igual a 1, pois números menores ou iguais a 1 não são primos
  if (numero <= 1 || !Number.isInteger(numero)) {
    return false;
  }

  // Verificar se o número é divisível por algum outro número além de 1 e ele mesmo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  // Se não foi encontrado nenhum divisor além de 1 e ele mesmo, o número é primo
  return true;
}

// Exemplo de uso:
const nume1 = 7; //true
const nume2 = 12; // false

console.log(`${nume1} é um número primo? ${ehNumeroPrimo(nume1)}`);
console.log(`${nume2} é um número primo? ${ehNumeroPrimo(nume2)}`);
