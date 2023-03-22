import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const TotalCity = ({ countrySelected }) => {
  const players = useSelector((state) => state.players.players);
  let totalCountryViews = 0;
  players.forEach((player) => {
    if (player.city === countrySelected.city) {
      totalCountryViews += +player.id;
    }
  });

  return (
    <section className={countrySelected.id % 2 === 0 ? 'total-city' : 'total-city-second-background'}>
      <img className="world-map-img" src={countrySelected.image} alt="World Map" />
      <div className="total-world-container-text">
        <h2 className="name-city">{countrySelected.city}</h2>
        <h2 className="name-city">{countrySelected.team}</h2>
        <p className="text-views">{totalCountryViews}</p>
      </div>
    </section>
  );
};

export default TotalCity;

TotalCity.propTypes = {
  countrySelected: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    team: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
