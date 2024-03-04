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
