import * as Types from "../Types";

const currentWeather = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.LOCAL_WEATHER_SUCCESS:
    case Types.CURRENT_WEATHER_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default currentWeather;
