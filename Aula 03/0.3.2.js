const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
  {
    titulo: 'Lavar roupa',
    concluida: true,
    dias: 20,
  },
];

function validarFuncoesConcluidas() {
  return tarefas.filter((tarefa) => tarefa.concluida === true);
}

function validarQuantFuncoesNaoConcluidas() {
  return tarefas.filter((tarefa) => tarefa.concluida === false).length;
}

function validarFuncoesConcluidasMenosTrintaDias() {
  return tarefas.filter(
    (tarefa) => tarefa.concluida === true && tarefa.dias < 30
  );
}

console.log(validarFuncoesConcluidas());
console.log(validarQuantFuncoesNaoConcluidas());
console.log(validarFuncoesConcluidasMenosTrintaDias());
