import { useEffect, useState } from "react";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from "./components/presentational/LocationList";
import { Collapse } from "./components/presentational/Collapse";

function App() {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div>
      <h2 onClick={() => setShowEpisodes(!showEpisodes)}>Эпизоды</h2>
      <Collapse
        className="episodes-collapse"
        title="Эпизоды"
        content={showEpisodes && <EpisodeList />} 
      />

      <h2 onClick={() => setShowLocations(!showLocations)}>Локации</h2>
      <Collapse
        className="locations-collapse"
        title="Локации"
        content={showLocations && <LocationList />} 
      />
    </div>
  );
}

export default App;
