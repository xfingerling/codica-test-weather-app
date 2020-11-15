import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import openWeatherAPI from "../api/openWeatherAPI";

import Chart from "../components/Chart/Chart";

const DetailInfoPage = ({ location }) => {
  const [state, setState] = useState({});
  const { coord, name } = location.state;
  const { current, hourly } = state;

  useEffect(() => {
    openWeatherAPI.fetchHourlyForecast(coord).then(setState);
  }, [coord]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <p>Current Weather</p>
          {!!current && (
            <div>
              <img
                style={{ width: "200px" }}
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
                alt={current.weather[0].description}
              />
            </div>
          )}
        </Grid>
        <Grid item sm={6}>
          {!!current && (
            <div>
              <p>Temp: {Math.round(current.temp)}&#8451;</p>
              <p>Wind speed: {current.wind_speed} m/s</p>
              <p>Pressure: {current.pressure} Pa</p>
              <p>Humidity: {current.humidity}%</p>
            </div>
          )}
        </Grid>
        <Grid item sm={12}>
          <Chart data={hourly} />
        </Grid>
      </Grid>
    </>
  );
};

DetailInfoPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailInfoPage;
