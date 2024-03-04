const prompt = require("readline-sync");
// // Faça um programa que peça uma nota, entre zero e dez.
// // Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// let tentativas = 0;
// let arrayNotas = [];
// let soma = 0;

// for (let i = 0; i < 4; i++) {
//   let nota = parseFloat(
//     prompt.question(`Digite sua ${i + 1}º nota (de 0 a 10): `)
//   );

//   if (isNaN(nota) || nota < 0 || nota > 10) {
//     tentativas++;
//     console.log("Digite uma nota válida.");
//     // i--; // Decrementa i para que a mesma iteração seja repetida
//     if (tentativas === 3) {
//       console.log("Número de tentativas excedidas.");
//       break;
//     }
//   } else {
//     arrayNotas.push(nota); // Adiciona a nota ao array
//   }
// }
// for (i = 0; i < arrayNotas.length; i++) {
//   soma += arrayNotas[i];
// }
// console.log(`A soma das notas é igual a ${soma}.`);
// console.log(`A médias das notas é igaul a ${soma / arrayNotas.length}.`);

// console.log("Notas digitadas:", arrayNotas);

// // Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
// // mostrando uma mensagem de erro e voltando a pedir as informações.

// let tentativas = 0;
// for (i = 0; i < 3; i++) {
//   let nome = prompt.question("Digite seu nome: ");
//   let senha = prompt.question("Digite sua senhar: ");
//   if (nome === senha) {
//     tentativas++;
//     console.log("Nome e senha não podem ser iguais");
//     if (tentativas === 3) {
//       console.log(
//         `Você tentou ${tentativas} vezes, por isso sua conta foi bloqueada.`
//       );
//     }
//   } else {
//     console.log(`Bem vindo ${nome.toLocaleUpperCase()}.`);
//     break;
//   }
// }

// // Faça um programa que leia e valide as seguintes informações:
// // Nome: maior que 3 caracteres;
// // Idade: entre 0 e 150;
// // Salário: maior que zero;
// // Sexo: 'f' ou 'm';
// // Estado Civil: 's', 'c', 'v', 'd';
// // Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

// for (i = 0; i < 3; i++) {
//   let nome = prompt.question("Digite seu nome: ");
//   let idade = prompt.question("Digite sua idade: ");
//   let salario = prompt.question("Digite seu salário: ");
//   let sexo = prompt.question("Digite seu sexo (M ou F): ");
//   let estadoCivil = prompt.question("Digite seu estado civil (S, C, V ou D): ");
//   if (
//     nome.length < 3 ||
//     idade < 0 ||
//     idade > 150 ||
//     salario < 0 ||
//     !(sexo.toUpperCase() === "M" || sexo.toUpperCase() === "F") ||
//     !(
//       estadoCivil.toUpperCase() === "S" ||
//       estadoCivil.toUpperCase() === "C" ||
//       estadoCivil.toUpperCase() === "V" ||
//       estadoCivil.toUpperCase() === "D"
//     )
//   ) {
//     console.log(
//       "Verifique os dados informados, eles nao seguem as regras estabelecidas."
//     );
//     break;
//   } else {
//     console.log(`Bem vindo ${nome.toUpperCase()}.`);
//     break;
//   }
// }

// // Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3%
// // e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.
// // Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse
// // ou iguale a população do país B, mantidas as taxas de crescimento.

// let PopulacaoPaisA = 80000;
// let taxaCrescimentoPaisA = 0.03;

// let populacaoPaisB = 200000;
// let taxaCrescimentoPaisB = 0.015;

// let anos = 0;

// for (anos = 0; PopulacaoPaisA <= populacaoPaisB; anos++) {
//   PopulacaoPaisA = PopulacaoPaisA * (1 + taxaCrescimentoPaisA); // O 1 representa 100% da população
//   populacaoPaisB = populacaoPaisB * (1 + taxaCrescimentoPaisB); // O 1 representa 100% da população
// }

// console.log(
//   `Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`
// );

// // // Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
// let populacaoPaisA = Number(
//   prompt.question("Digite o número de habitantes do país A: ")
// );
// let taxaCrescimentoPaisA = Number(
//   prompt.question("Digite a taxa de crescimento da população do país A: ")
// );

// let populacaoPaisB = Number(
//   prompt.question("Digite o número de habitantes do país B: ")
// );
// let taxaCrescimentoPaisB = Number(
//   prompt.question("Digite a taxa de crescimento da população do país B: ")
// );

// let anos = 0;

// for (anos = 0; populacaoPaisA <= populacaoPaisB; anos++) {
//   populacaoPaisA = populacaoPaisA * (1 + taxaCrescimentoPaisA / 100);
//   populacaoPaisB = populacaoPaisB * (1 + taxaCrescimentoPaisB / 100);
// }

// console.log(
//   `Serão necessários ${anos} para que a população do país A iguale ou ultrapasse a população do país B.`
// );

// // Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

// // Imprime os números um ao lado do outro
// let numerosLadoALado = "";
// for (let i = 1; i <= 20; i++) {
//   // numerosLadoALado += i + " ";
// }
// console.log(numerosLadoALado);

// // Faça um programa que leia 5 números e informe o maior número.
// const quantidadeNumeros = 5;
// let maiorNumero;

// for (i = 1; i <= quantidadeNumeros; i++) {
//   let numero = Number(prompt.question(`Digite o ${i}º número: `));

//   if (isNaN(numero)) {
//     console.log("Por favor, digite um número válido.");
//     i--; // Para compensar a iteração que não foi válida
//   } else {
//     if (i === 1 || numero > maiorNumero) {
//       maiorNumero = numero;
//     }
//   }
// }

// console.log(`O maior número é: ${maiorNumero}.`);

// // Faça um programa que leia 5 números e informe a soma e a média dos números
// let numeros = [];
// let somaNumerosArray = 0;
// let media;
// for (i = 1; i <= 5; i++) {
//   let numerosDigitados = Number(prompt.question(`Digite o ${i}º número: `));
//   if (isNaN(numerosDigitados)) {
//     console.log("Digite um número válido");
//     i--;
//   } else {
//     numeros.push(numerosDigitados);
//     somaNumerosArray = somaNumerosArray + numerosDigitados;
//   }
// }
// media = somaNumerosArray / numeros.length;

// console.log(`Os números digitados foram ${numeros.join(", ")}.`);
// console.log(`O resultado da soma dos números digitados é ${somaNumerosArray}.`);
// console.log(`A média dos números digitados é ${media}.`);

// // Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

// for (i = 1; i <= 50; i++) {
//   if (!(i % 2 === 0)) {
//     console.log(i);
//   }
// }

// // Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
// let num1 = Number(prompt.question("Digte o primero número: "));
// let num2 = Number(prompt.question("Digite o segundo número: "));

// let inicio;
// let fim;
// let numerosInytervalo = [];

// // Ajustando os limites do intervalo
// if (num1 <= num2) {
//   inicio = num1;
//   fim = num2;
// } else {
//   inicio = num2;
//   fim = num1;
// }

// for (let i = inicio + 1; i < fim; i++) {
//   //"inicio + 1" = número digitado + 1 / i < fim = útimo número - 1 - Isso garante que os números exibidos sejam os do intervalo entre eles.
//   numerosInytervalo.push(i);
// }
// console.log(
//   `Os numeros que estão no intervalo entre ${inicio} e ${fim} são: ${numerosInytervalo.join(
//     ", "
//   )}.`
// );

// Altere o programa anterior para mostrar no final a soma dos números.
let num1 = Number(prompt.question("Digte o primero número: "));
let num2 = Number(prompt.question("Digite o segundo número: "));

let inicio;
let fim;
let numerosIntervalo = [];
let somaIntervalos = 0;

// Ajustando os limites do intervalo
if (num1 <= num2) {
  inicio = num1;
  fim = num2;
} else {
  inicio = num2;
  fim = num1;
}

for (let i = inicio + 1; i < fim; i++) {
  //"inicio + 1" = número digitado + 1 / i < fim = útimo número - 1 - Isso garante que os números exibidos sejam os do intervalo entre eles.
  numerosIntervalo.push(i);
  somaIntervalos = somaIntervalos + i;
  // console.log(i);
}
console.log(
  `Os numeros que estão no intervalo entre ${inicio} e ${fim} são: ${numerosIntervalo.join(
    ", "
  )}.`
);
console.log(`A soma dos números do intervalo é igual a: ${somaIntervalos}.`);
