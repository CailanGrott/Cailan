import './styles.css';

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const filtrarPersonagens = personagens.filter((personagem) => {
    const LastName = personagem.includes(props.lastName);

    return LastName;
  });

  return (
    <div>
      <h3>Filtrar personagens de Resident Evil</h3>
      <ul>
        {filtrarPersonagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <div>
        <Personagens lastName="Redfield" />;
      </div>
    </div>
  );
}
