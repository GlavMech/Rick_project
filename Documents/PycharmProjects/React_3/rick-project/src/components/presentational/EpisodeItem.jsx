import { useState, useMemo } from "react";
import { CharacterList } from "./CharacterList";

export const EpisodeItem = ({ episode }) => {
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => 
    episode.characters.map((character) => character.split("/").pop()), 
    [episode?.characters]
  );

  return (
    <div className="episode">
      <h3 onClick={() => setOpen((prev) => !prev)} style={{ cursor: "pointer" }}>
        {episode.episode + ": " + episode.name}
      </h3>
      {open && <CharacterList ids={ids} />}
    </div>
  );
};
