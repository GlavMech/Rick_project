export const CharacterItem = ({ character }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "character-alive";
      case "Dead":
        return "character-dead";
      default:
        return "character-unknown";
    }
  };

  return (
    <div className={`character-item ${getStatusClass(character.status)}`}>
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>
          <strong>Вид:</strong> {character.species}
        </p>
        <p>
          <strong>Локация:</strong> {character.location.name}
        </p>
        <p>
          <strong>Статус:</strong> {character.status}
        </p>
      </div>
    </div>
  );
};
