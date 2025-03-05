import { useState } from "react";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from "./components/presentational/LocationList";
import { Collapse } from "./components/presentational/Collapse";
import './components/Rick.css';

function App() {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  console.log('showEpisodes:', showEpisodes);
  console.log('showLocations:', showLocations);

  return (
    <div>
      <Collapse
        title="Эпизоды"
        open={showEpisodes}
        setOpen={setShowEpisodes} 
        className="episode-collapse"
      >
        <EpisodeList />
      </Collapse>

      <Collapse
        title="Локации"
        open={showLocations}
        setOpen={setShowLocations}
        className="location-collapse"
      >
        <LocationList />
      </Collapse>
    </div>
  );
}

export default App;
