const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

id = 1;

const filtrarPorNomeELancamento = filmes.map((filme) => {
  return {
    id: id++,
    titulo: filme.nome,
    lancamento: filme.lancamento,
    diretor: filme.diretores,
    genero: filme.generos,
  };
});

console.log(filtrarPorNomeELancamento);
