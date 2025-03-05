import { useState } from "react";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

export const LocationList = () => {
  const { locations } = useLocations();
  const [openLocations, setOpenLocations] = useState({});

  const toggleLocation = (id) => {
    setOpenLocations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="location"
          title={location.name}
          open={openLocations[location.id]}
          setOpen={() => toggleLocation(location.id)}
        >
          <CharacterList
            ids={location.residents.map((resident) => resident.split("/").pop())}
          />
        </Collapse>
      ))}
    </div>
  );
};
