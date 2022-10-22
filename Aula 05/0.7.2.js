const Personagens = () => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};
