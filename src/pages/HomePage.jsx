import React, { useEffect } from "react";

import { getLocalStorage } from "../utils/localStorage";

import SearchForm from "../containers/containerSearhForm";
import CityList from "../containers/containerCityList";
import CurrentWeatherCard from "../containers/containerCurrentWeatherCard";

const HomePage = ({ getCurrentWeather, setFavoriteCity }) => {
  useEffect(() => {
    getCurrentWeather();
    updateStore();
  });

  const updateStore = () => {
    const cities = getLocalStorage("favoriteCities");
    setFavoriteCity(cities);
  };

  return (
    <>
      <SearchForm />
      <CurrentWeatherCard />
      <CityList />
    </>
  );
};

export default HomePage;
