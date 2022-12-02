const usuario = {
  nome: 'Cailan Grott',
  email: 'cailangrott@gmail.com',
  senha: 'Soares123',
  localNascimento: ['Tramandaí', 'Rio Grande do Sul'],
  dataNascimento: [28, 08, 2002],
};

const comentarios = {
  Ricardo: {
    id: 1,
    comentarios: 'Sou diabético.',
  },
  Madu: {
    id: 2,
    comentarios: 'Oi',
  },
  Dyogo: {
    id: 3,
    comentarios: ['Salve zé!', 'Não entendi!?'],
  },
  Jorge: {
    id: 4,
    comentarios: 'Nhonho',
  },
};

console.log(comentarios);
console.log(comentarios.Ricardo.comentarios);
