export const LocationItem = ({ location }) => {
    return (
      <div className="location-item">
        <p>
          <strong>Тип: </strong> {location.type}
        </p>
        <p>
          <strong>Измерение: </strong> {location.dimension}
        </p>
        <p>
          <strong>Количество жителей: </strong> {location.residents.length}
        </p>
      </div>
    );
  };
