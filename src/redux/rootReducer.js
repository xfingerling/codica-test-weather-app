import { combineReducers } from "redux";

import currentWeatherReducer from "./reducers/currentWeatherReducer";
import favoriteCitiesReducer from "./reducers/favoriteCitiesReducer";

export default combineReducers({
  currentWeather: currentWeatherReducer,
  favoriteCities: favoriteCitiesReducer,
});
