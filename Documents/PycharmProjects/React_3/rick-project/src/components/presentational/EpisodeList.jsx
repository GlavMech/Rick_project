import { useState } from "react";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";

export const EpisodeList = () => {
  const { episodes } = useEpisodes();
  const [openEpisodes, setOpenEpisodes] = useState({});

  const toggleEpisode = (id) => {
    setOpenEpisodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {episodes.map((episode) => (
        <Collapse
          key={episode.id}
          className="episode"
          title={`${episode.episode}: ${episode.name}`}
          open={openEpisodes[episode.id]}
          setOpen={() => toggleEpisode(episode.id)}
        >
          <CharacterList
            ids={episode.characters.map((character) => character.split("/").pop())}
          />
        </Collapse>
      ))}
    </div>
  );
};
