import * as Types from "../Types";

export const currentWeatherRequest = () => ({
  type: Types.CURRENT_WEATHER_REQUEST,
});

export const currentWeatherSuccess = (data) => ({
  type: Types.CURRENT_WEATHER_SUCCESS,
  payload: data,
});

export const currentWeatherError = (error) => ({
  type: Types.CURRENT_WEATHER_ERROR,
  payload: {
    error,
  },
});
