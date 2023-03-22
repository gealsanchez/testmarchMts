import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TotalCity from '../components/TotalCity';
import Players from '../components/Players';

const List = () => {
  const { id } = useParams();
  const [countrySelected, setCountrySelected] = useState(+id);
  const cities = useSelector((state) => state.cities.cities);

  useEffect(() => {
    setCountrySelected(cities.find((country) => country.id === +id));
  }, [cities, id]);

  return (
    <div>
      <TotalCity countrySelected={countrySelected} />
      <div className="players-city">PLAYERS LIST</div>
      <Players countrySelected={countrySelected} />
    </div>
  );
};

export default List;