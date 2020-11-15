import * as queryCurrentWeatherAction from "../actions/queryCurrentWeatherAction";
import openWeatherAPI from "../../api/openWeatherAPI";

export const fetchCurrentWeather = (query) => (dispatch) => {
  dispatch(queryCurrentWeatherAction.currentWeatherRequest);
  openWeatherAPI
    .fetchCurrentWeather(query)
    .then((data) => {
      dispatch(queryCurrentWeatherAction.currentWeatherSuccess(data));
    })
    .catch((err) => {
      dispatch(queryCurrentWeatherAction.currentWeatherError(err));
    });
};
