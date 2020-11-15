import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  IconButton,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { setLocalStorage, getLocalStorage } from "../../utils/localStorage";

import styles from "./CurrentWeatherCard.module.css";

const LocalWeatherCard = ({
  currentWeatherData,
  favoriteCities,
  getCurrentWeather,
  setFavoriteCity,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, main, sys, weather, coord } = currentWeatherData;

  useEffect(() => {
    const isFavoriteCity = favoriteCities.includes(name);

    if (!isFavoriteCity) setIsFavorite(false);
    if (isFavoriteCity) setIsFavorite(true);
  }, [favoriteCities, name]);

  const addFavoriteAndUpdateStore = () => {
    if (!name) return;

    setLocalStorage("favoriteCities", name);
    const cities = getLocalStorage("favoriteCities");

    setFavoriteCity(cities);
    setIsFavorite(true);
  };

  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item xs={8} md={5}>
        <Card>
          <CardHeader
            title={name}
            subheader={!!sys && sys.country}
            action={
              <>
                <IconButton
                  disabled={isFavorite}
                  aria-label="remove"
                  onClick={addFavoriteAndUpdateStore}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="refresh"
                  onClick={getCurrentWeather.bind(null, name)}
                >
                  <RefreshIcon />
                </IconButton>
              </>
            }
          />
          <CardActionArea
            component={Link}
            to={{
              pathname: "/details",
              state: { coord, name },
            }}
          >
            {!!weather && (
              <div className={styles.wrapImg}>
                <img
                  className={styles.img}
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                  alt={weather[0].description}
                />
              </div>
            )}
            <p className={styles.currentTemp}>{!!main && main.temp}&#8451;</p>

            <Grid container justify="center">
              <Grid item xs={5} className={styles.temp}>
                <p>max {!!main && main.temp_max}&#8451;</p>
              </Grid>
              <Grid item xs={5} className={styles.temp}>
                <p>min {!!main && main.temp_min}&#8451;</p>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LocalWeatherCard;
