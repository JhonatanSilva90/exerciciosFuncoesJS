const prompt = require("readline-sync");
// Descobrir maior número
const numero1 = prompt.question("Digite o primeiro número: ");
const numero2 = prompt.question("Digite o segundo número: ");
if (numero1 > numero2) {
  console.log(`O número ${numero1} é maior que o ${numero2}.`);
} else if (numero1 < numero2) {
  console.log(`O número ${numero2} é maior que o número ${numero1}.`);
} else {
  console.log(`O número ${numero1} é igual ao número ${numero2}.`);
}

// Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
let letra = prompt.question("Digite uma letra: ");
letra = letra.toLowerCase(); // Transformando as letras digitadas todas para minusculas.
if (!isNaN(letra)) {
  console.log("Você deve digitar apenas letras.");
} else if (
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "0" ||
  letra === "u"
) {
  console.log(`Você digitou a letra ${letra} e ela é uma vogal.`);
} else {
  console.log(`Você digitou a letra ${letra} e ela é uma consolante.`);
}

// Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.
const nota1 = Number(prompt.question("Digite a primeira nota: "));
const nota2 = Number(prompt.question("Digite a segunda nota: "));
const media = (nota1 + nota2) / 2;

if (media === 10) {
  console.log(
    `A média das suas notas foi ${media} e você foi APROVADO com distinção.`
  );
} else if (media >= 7) {
  console.log(`A média das suas notas foi ${media} e você foi APROVADO.`);
} else {
  console.log(`A média das suas notas foi ${media} e você foi REPROVADO.`);
}

// Faça um script que leia três números inteiros e mostre o maior deles.
let num1 = Number(prompt.question("Digite o primeiro número: "));
let num2 = Number(prompt.question("Digite o segundo número: "));
let num3 = Number(prompt.question("Digite o terceiro número: "));

if (num1 === num2 && num2 == num3) {
  console.log("Os números digitados são iguais.");
} else {
  let maiorNumero = num1;
  if (num2 >= maiorNumero) {
    console.log(`O maior número digitado foi o ${num2}.`);
  } else if (num3 >= maiorNumero) {
    console.log(`O maior número digitado foi ${num3}.`);
  }
}

// Faça um script que pede dois inteiros e armazene eles em duas variáveis.
// Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
let num1 = Number(prompt.question("Digite o primeiro número: "));
let num2 = Number(prompt.question("Digite o segundo número: "));

const numero1 = num1;
num1 = num2;
num2 = numero1;

console.log(
  `Os valores depois da troca ficaram da seguinte forma: \n O primeiro número é ${num1} e o segundo número é ${num2}.`
);

// Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
let num1 = Number(prompt.question("Digite o primeiro número: "));
let num2 = Number(prompt.question("Digite o segundo número: "));
let num3 = Number(prompt.question("Digite o terceiro número: "));

// Verificar o maior
let maior;
if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;
} else {
  maior = num3;
}

// Verificar o menor
let menor;
if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
} else {
  menor = num3;
}
console.log(`O maior número digitado foi ${maior} e o menor foi ${menor}.`);

Faça um script que leia três números e mostre-os em ordem decrescente.
let num1 = Number(prompt.question("Digite o primeiro número: "));
let num2 = Number(prompt.question("Digite o segundo número: "));
let num3 = Number(prompt.question("Digite o terceiro número: "));

let maior;
if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;
} else {
  maior = num3;
}

let meio;
if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
  meio = num1;
} else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
  meio = num2;
} else {
  meio = num3;
}
let menor;
if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
} else {
  menor = num3;
}

console.log(
  `Os números digitados em ordem decrescente foram: ${maior}, ${meio} e ${menor}.`
);

// Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
let nome = prompt.question("Digte seu nome: ");
let turnoAula = prompt.question(
  "Em que turno você estuda (M-matutino ou V-Vespertino ou N- Noturno): "
);
turnoAula = turnoAula.toUpperCase();
if (turnoAula === "M") {
  console.log(`Bom dia, ${nome.toUpperCase()}!`);
} else if (turnoAula === "V") {
  console.log(`Boa tarde, ${nome.toUpperCase()}!`);
} else if (turnoAula === "N") {
  console.log(`Boa noite, ${nome.toUpperCase()}!`);
} else {
  console.log("Valor inválido, tente novamente.");
}

// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%

//     salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

let nome = prompt.question("Digte seu nome: ");
let salario = Number(prompt.question("Digite seu salário: "));
let percentualAumento;
let novoSalario;

const reajuste20 = (salario * 20) / 100;
const reajuste15 = (salario * 15) / 100;
const reajuste10 = (salario * 10) / 100;
const reajuste5 = (salario * 5) / 100;

if (salario <= 280) {
  percentualAumento = 20;
  novoSalario = salario + reajuste20;
} else if (salario > 280 && salario <= 700) {
  percentualAumento = 15;
  novoSalario = salario + reajuste15;
} else if (salario > 700 && salario < 1500) {
  percentualAumento = 10;
  novoSalario = salario + reajuste10;
} else {
  percentualAumento = 5;
  novoSalario = salario + reajuste5;
}

console.log(
  `Olá ${nome.toUpperCase()}, \nSeu salário era de: ${salario} reais.\nVocê teve um aumento de ${percentualAumento}%.\nIsso corresponde a ${
    (salario * percentualAumento) / 100
  } reais de aumento.\nSeu novo salário será de: ${novoSalario} reais.`
);

// Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto
// (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//     Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20%
//     Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//     Salário Bruto: (5 * 220)        : R$ 1100,00
//     (-) IR (5%)                                : R$   55,00
//     (-) INSS ( 10%)                       : R$  110,00
//     FGTS (11%)                            : R$  121,00
//     Total de descontos                : R$  165,00
//     Salário Liquido                       : R$  935,00

let valorHora = Number(
  prompt.question("Digite o valor da sua hora em reais: ")
);
let horasTrabalhadas = Number(
  prompt.question("Digite a quantidade de horas trabalhadas no mês: ")
);

let descontosIR;
let descontosIRReal;
let salario = valorHora * horasTrabalhadas;
let descontoSindicato = (salario * 3) / 100;
let descontoFGTS = (salario * 11) / 100;
let salarioLiquido;
if (salario <= 900) {
  descontosIR = 0;
  descontosIRReal = (salario * descontosIR) / 100;
  salarioLiquido = salario - descontoSindicato - descontosIR;
} else if (salario <= 1500) {
  descontosIR = 5;
  descontosIRReal = (salario * 5) / 100;
} else if (salario <= 2500) {
  descontosIR = 10;
  descontosIRReal = (salario * descontosIR) / 100;
} else {
  descontosIR = 20;
  descontosIRReal = (salario * descontosIR) / 100;
}

console.log(
  `Salário bruto: (${valorHora} * ${horasTrabalhadas})  : R$ ${
    valorHora * horasTrabalhadas
  }\n(-) IR (${descontosIR}%)                : R$ ${descontosIRReal}\n(-) Desc Sindicato (3%)   : R$ ${descontoSindicato}\nFGTS (11%)                : R$ ${descontoFGTS}\nTotal de Descontos        : R$ ${
    descontosIRReal + descontoSindicato
  }\nSalário Líquido           : R$ ${(salarioLiquido =
    salario - descontoSindicato - descontosIRReal)}`
);

// Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

const numero = Number(prompt.question("Digite um número (de 1 a 7): "));
switch (numero) {
  case 1:
    console.log("Segunda-Feira");
    break;
  case 2:
    console.log("Terça-Feira");
    break;
  case 3:
    console.log("Quarta-Feira");
    break;
  case 4:
    console.log("Quinta-Feira");
    break;
  case 5:
    console.log("Sexta-Feira");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Digite um número válido (de 1 a 7)");
}

// Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média.
// A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO”
// se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let nota1 = Number(prompt.question("Digite a primeira nota: "));
let nota2 = Number(prompt.question("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

if (media <= 10 && media >= 9) {
  console.log(`Sua média é: ${media}, você ficou com conceito A.`);
} else if (media >= 7.5) {
  console.log(`Sua média é: ${media}, você ficou com conceito B.`);
} else if (media >= 6) {
  console.log(`Sua média é: ${media}, você ficou com conceito C.`);
} else if (media >= 4) {
  console.log(`Sua média é: ${media}, você ficou com conceito D.`);
} else if (media < 4 && media >= 0) {
  console.log(`Sua média é: ${media}, você ficou com conceito E.`);
} else {
  console.log("Digite um número válido!");
}

// Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

let ano = Number(prompt.question("Digite o ano: "));
if (ano % 400 == 0) {
  console.log("Esse é um ano Bissexto!");
} else if (ano % 4 == 0 && ano % 100 != 100) {
  console.log("Esse é um ano Bissexto!");
} else {
  console.log("Esse não é uma ano Bissexto!");
}

// Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
let dia = Number(prompt.question("Digite o dia: "));
let mes = Number(prompt.question("Digite o mês: "));
let ano = Number(prompt.question("Digite o ano: "));

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if (dia <= 31) {
      console.log("Data válida.");
    } else {
      console.log("Data inválida (mês com mais de 31 dias.)");
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (dia <= 30) {
      console.log("Data válida.");
    } else {
      console.log("Data inválida (mês com mais de 30 dias.)");
    }
    break;
  case 2:
    if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
      if (dia <= 29) {
        console.log("Data válida.");
      } else {
        console.log("Data inválida (mês com mais de 29 dias.)");
      }
    } else {
      if (dia <= 28) {
        console.log("Data válida.");
      } else {
        console.log("Data inválida (mês com mais de 28 dias.)");
      }
    }
    break;
  default:
    console.log("Mês inválido.");
}

// Faça um script que peça um número inteiro e determine se ele é par ou ímpar.
// Dica: utilize o operador módulo (resto da divisão): %
let numero = Number(prompt.question("Digite um número inteiro: "));
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é impar.");
}

// Faça um script que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:

// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

let numero = Number(
  prompt.question("Digite um número inteiro menor que 1000: ")
);
if (numero < 1 || numero >= 1000) {
  console.log("Número inválido!");
} else {
  const centenas = Math.floor(numero / 100);
  const dezenas = Math.floor((numero % 100) / 10);
  const unidades = Math.floor(numero % 10);

  let resultado = `${numero} = `;
  if (centenas > 0) {
    resultado += `${centenas} ${centenas > 1 ? "centenas" : "centena"}`;
    if (dezenas > 0 || unidades > 0) {
      resultado += " e ";
    }
  }
  if (dezenas > 0) {
    resultado += `${dezenas} ${dezenas > 1 ? "dezenas" : "dezena"}`;
    if (unidades > 0) {
      resultado += " e ";
    }
  }
  if (unidades > 0) {
    resultado += `${unidades} ${unidades > 1 ? "unidade" : "unidade"}`;
  }
  console.log(resultado);
}

// Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque
// e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
// O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas existentes na máquina.

// Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

let valorSaque = Number(prompt.question("Digite o valor do saque: "));
if (valorSaque < 10 || valorSaque > 600) {
  console.log("Valor inválido.\nO valor deve estar entre 10 e 600 reais.");
} else {
  let notas200 = 0;
  let notas100 = 0;
  let notas50 = 0;
  let notas20 = 0;
  let notas10 = 0;
  let notas5 = 0;
  let notas1 = 0;
  while (valorSaque >= 200) {
    notas200++;
    valorSaque -= 200;
  }
  while (valorSaque >= 100) {
    notas100++;
    valorSaque -= 100;
  }
  while (valorSaque >= 50) {
    notas50++;
    valorSaque -= 50;
  }
  while (valorSaque >= 20) {
    notas20++;
    valorSaque -= 20;
  }
  while (valorSaque >= 10) {
    notas10++;
    valorSaque -= 10;
  }
  while (valorSaque >= 5) {
    notas5++;
    valorSaque -= 5;
  }
  while (valorSaque >= 1) {
    notas1++;
    valorSaque -= 1;
  }
  let resultado = "Notas fornecidas:";
  if (notas200 > 0) resultado += `\n- ${notas200} nota(s) de 200 reais;`;
  if (notas100 > 0) resultado += `\n- ${notas100} nota(s) de 100 reais;`;
  if (notas50 > 0) resultado += `\n- ${notas50} nota(s) de 50 reais;`;
  if (notas20 > 0) resultado += `\n- ${notas20} nota(s) de 20 reais;`;
  if (notas10 > 0) resultado += `\n- ${notas10} nota(s) de 10 reais;`;
  if (notas5 > 0) resultado += `\n- ${notas5} nota(s) de 5 reais;`;
  if (notas1 > 0) resultado += `\n- ${notas1} nota(s) de 1 real;`;

  console.log(resultado);
}
