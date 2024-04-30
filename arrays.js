const prompt = require("readline-sync");
// Criando um array
let frutas = ["Maçã", "Manga", "Graviola", "Tapereba", "Mucajá"];

// Adicionando um elemento ao final array
frutas.push("Acerola");

// Removendo o último elemento
frutas.pop();

// Saber qual elemento foi removido
let frutaRemovidas = frutas.pop();
console.log(frutaRemovidas);

// Adicionar um elemento ao inicio do array
frutas.unshift("Açai");

// Removendo o primeiro elemento do array
frutas.shift();

// Mapenado os elementos do array, descobrindo o número de elementos de cada palavra(string)
let comprimentoFrutas = frutas.map((fruta) => {
  return fruta.length;
});
console.log(comprimentoFrutas);

// Filtrando elementos do array
let frutasComM = frutas.filter((fruta) => {
  return fruta.includes("M");
});
console.log(`Aqui estão as frutas com a letra M:  ${frutasComM}.`);

// Reduzindo os elementos do array
let concatenacaoFrutas = frutas.reduce((acumulador, fruta) => {
  return `${acumulador}, ${fruta}`;
});
console.log(`A concatenação das frutas gerou ${concatenacaoFrutas}`);
console.log(frutas);

// Crie um script que pergunte 3 números ao usuário, coloque em um array,
// depois exiba tal array. Modifique os elementos do array de modo a a sequência de números
// ficar do contrário.Ou seja, se digitou: 1,2,3 Vai aparecer: 3,2,1

let num1 = prompt.question("Digite o primeiro número: ");
let num2 = prompt.question("Digite o segundo número: ");
let num3 = prompt.question("Digite o terceiro número: ");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Insira apenas números.");
} else {
  let array = [num1, num2, num3];
  console.log(`Os números digitdos foram: ${array.reverse().join(", ")}.`);
}

// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor.
// Ao final, exiba o array e o array ao contrário (generalização do script anterior).

let arrayDeNumeros = [];
let contador = 0;

const numeroItensArray = prompt.question(
  "Quantos números deseja colocar no array: "
);

for (let i = 0; i < numeroItensArray && contador < 3; i++) {
  console.log(`Você precisará digitar ${numeroItensArray} números.`);
  let itensArrays = prompt.question(
    `Digite o ${i + 1}º item a ser armazenado no array:`
  );

  if (isNaN(itensArrays)) {
    contador++;
    console.log("Digite apenas números.");
    console.log(
      `Você já tentou ${contador} vezes. Após a 3ª tentativa, seu acesso será bloqueado.`
    );
    i--; // Decrementa para repetir a iteração e pedir o mesmo número novamente.
  } else {
    arrayDeNumeros.push(itensArrays);
  }
}

if (contador < 3) {
  console.log(`Os números digitados foram ${arrayDeNumeros.join(", ")}.`);
  console.log(
    `Aqui estão os números digitdos exibidos de forma inversa: ${arrayDeNumeros
      .reverse()
      .join(", ")}.`
  );
} else {
  console.log("Acesso bloqueado!");
}

// 05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente.
// Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.
function ordenarArray(array) {
  const tamanhoArray = array.length;
  for (let i = 0; i < tamanhoArray - 1; i++) {
    for (let j = 0; j < tamanhoArray - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// Exemplo de uso:
const array = [5, 3, 9, 1, 4];
console.log("Array original:", array);
const sortedArray = ordenarArray(array);
console.log("Array ordenado:", sortedArray);

// 06. Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor,
// e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).
function findIndices(array, target) {
  const indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

// Exemplo de uso:
const vetor = [2, 5, 7, 2, 8, 2, 9];
const numero = 2;
const indices = findIndices(vetor, numero);
console.log(`O número ${numero} aparece nos seguintes índices: ${indices}`);

// 07. Crie um script que pede um inteiro positivo para o usuário.
// Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores,
// some com elementos anteriores do array.
function fibonacciArray(n) {
  const fibArray = [];
  // Adiciona os dois primeiros números de Fibonacci ao array
  fibArray.push(0);
  fibArray.push(1);

  // Popula o array com os números de Fibonacci usando elementos anteriores do array
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Digite um inteiro positivo para gerar a sequência de Fibonacci: ",
  (number) => {
    const n = parseInt(number);
    if (isNaN(n) || n < 1) {
      console.log("Por favor, digite um inteiro positivo válido.");
    } else {
      const fibSequence = fibonacciArray(n);
      console.log("Sequência de Fibonacci:", fibSequence);
    }
    readline.close();
  }
);

// 08. Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!
function calcularFatoriais(n) {
  const fatoriais = [1]; // Começamos com 0! = 1
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    fatoriais.push(factorial);
  }
  return fatoriais;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Digite um número inteiro não negativo para calcular os fatoriais: ",
  (numero) => {
    const n = parseInt(numero);
    if (isNaN(n) || n < 0) {
      console.log("Por favor, digite um número inteiro não negativo válido.");
    } else {
      const fatoriais = calcularFatoriais(n);
      for (let i = 0; i <= n; i++) {
        console.log(`Fatorial de ${i}: ${i}! = ${fatoriais[i]}`);
      }
    }
    readline.close();
  }
);

// 09. Peça ao usuário uma quantidade de linhas e e outra de colunas,
// depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.
function criarMatriz(linhas, colunas) {
  const matriz = [];
  let contador = 1;
  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push(contador);
      contador++;
    }
    matriz.push(linha);
  }
  return matriz;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de linhas: ", (linhas) => {
  readline.question("Digite a quantidade de colunas: ", (colunas) => {
    const qtdLinhas = parseInt(linhas);
    const qtdColunas = parseInt(colunas);
    if (
      isNaN(qtdLinhas) ||
      isNaN(qtdColunas) ||
      qtdLinhas <= 0 ||
      qtdColunas <= 0
    ) {
      console.log(
        "Por favor, digite quantidades válidas de linhas e colunas (números inteiros positivos)."
      );
    } else {
      const matriz = criarMatriz(qtdLinhas, qtdColunas);
      console.log("Matriz criada:");
      for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
      }
    }
    readline.close();
  });
});
