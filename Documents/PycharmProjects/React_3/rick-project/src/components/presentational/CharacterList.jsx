import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters"; 

export const CharacterList = ({ ids }) => {
  const { characters, isLoading } = useCharacters(ids);

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  // Проверяем, является ли `characters` массивом, чтобы избежать ошибки `.map`
  if (!Array.isArray(characters)) {
    console.error("Ошибка: characters не является массивом", characters);
    return <p>Нет данных</p>;
  }

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};


