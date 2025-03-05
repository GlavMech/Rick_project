export const LocationItem = ({ location }) => {
    return (
      <div className="location-item">
        <h3>{location.name}</h3>
        <p>Тип: {location.type}</p>
        <p>Измерение: {location.dimension}</p>
        <p>Количество жителей: {location.residents.length}</p>
      </div>
    );
  };