import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardActionArea,
  IconButton,
  Grid,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteIcon from "@material-ui/icons/Delete";

import openWeatherAPI from "../../../api/openWeatherAPI";
import {
  removeFromLocalStorage,
  getLocalStorage,
} from "../../../utils/localStorage";

import styles from "./CityCard.module.css";

const CityCard = ({ cityName, setFavoriteCity }) => {
  const [state, setState] = useState({});
  const { name, sys, weather, main, coord } = state;

  useEffect(() => {
    fetchWeather(cityName);
  }, [cityName]);

  const fetchWeather = async (query) => {
    const data = await openWeatherAPI.fetchCurrentWeather(query);
    setState(data);
  };

  const update = () => {
    removeFromLocalStorage("favoriteCities", name);
    const cities = getLocalStorage("favoriteCities");

    setFavoriteCity(cities);
  };

  return (
    <Card className={styles.listItem}>
      <CardHeader
        classes={{ root: styles.header }}
        title={name}
        subheader={!!sys && sys.country}
        action={
          <>
            <IconButton aria-label="refresh" onClick={update}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="refresh"
              onClick={fetchWeather.bind(null, cityName)}
            >
              <RefreshIcon />
            </IconButton>{" "}
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
  );
};

export default CityCard;
