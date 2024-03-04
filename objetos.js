const prompt = require("readline-sync");

// Criando um objetos
let pessoa = {
  nome: "Jhonatan",
  idade: 33,
  desenvolvedor: true,
  linguagens: ["JS", "React", "TypeScript", "HTML", "CSS"],
};
pessoa.idade = 34;
pessoa.linguagens[3] = "Em desenvolvimento";
// pessoa.linguagens.pop();
// Acessar propriedade do objeto
console.log(pessoa.nome.toLocaleUpperCase());
console.log(pessoa.linguagens);
console.log(pessoa.idade);
