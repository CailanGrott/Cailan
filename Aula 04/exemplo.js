const pessoas = [
  {
    nome: 'cailan',
    premium: true,
    anoNascimento: '2002-08-28',
    cidades: ['Porto Alegre'],
  },
  {
    nome: 'maria',
    anoNascimento: '2002-09-09',
    cidades: ['Porto Alegre'],
  },
];

const resultado = pessoas.map((pessoa) => {
  let cor = 'branco';
  if (pessoa.premium) {
    cor = 'dourado';
  }
  return {
    nome: pessoa.nome,
    anoNascimento: pessoa.anoNascimento,
    cor,
  };
});

console.log(resultado);
