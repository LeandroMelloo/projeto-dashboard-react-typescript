const nome: string = 'Leandro';
console.log(nome);

const idade: number = 37;
console.log(idade);

const peso: number = 102.89;
console.log(peso);

const online: boolean = false;
console.log(online);

const frutas: string[] = [];
frutas.push('Banana', 'Maça');

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);

const bebidas: Array<string> = ['Coca', 'Fanta', 'Dolly'];
console.log(bebidas);
console.log(bebidas.length);
console.log(bebidas[2]);

interface IPessoa {
  nome: string;
  idade: number;
  peso: number;
  online: boolean;
}

const estudante: IPessoa = {
  nome: 'Leandro',
  idade: 37,
  peso: 102.89,
  online: false
}

console.log(`Nome do aluno: ${estudante.nome}, idade: ${estudante.idade}, peso: ${estudante.peso}, está ativo: ${estudante.online}.`);

