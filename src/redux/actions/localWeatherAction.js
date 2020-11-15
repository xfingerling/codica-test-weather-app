import * as Types from "../Types";

export const localWeatherRequest = () => ({
  type: Types.LOCAL_WEATHER_REQUEST,
});

export const localWeatherSuccess = (data) => ({
  type: Types.LOCAL_WEATHER_SUCCESS,
  payload: data,
});

export const localWeatherError = (error) => ({
  type: Types.LOCAL_WEATHER_ERROR,
  payload: {
    error,
  },
});
