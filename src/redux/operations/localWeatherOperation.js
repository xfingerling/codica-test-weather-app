import * as localWeatherAction from "../actions/localWeatherAction";
import openWeatherAPI from "../../api/openWeatherAPI";

export const fetchCurrentLocalWeather = () => (dispatch, getState) => {
  dispatch(localWeatherAction.localWeatherRequest());
  openWeatherAPI
    .fetchCurrentWeatherByGeolocation()
    .then((data) => {
      dispatch(localWeatherAction.localWeatherSuccess(data));
    })
    .catch((err) => {
      dispatch(localWeatherAction.localWeatherError(err));
    });
};
