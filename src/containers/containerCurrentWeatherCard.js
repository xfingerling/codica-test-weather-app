import { connect } from "react-redux";
import { fetchCurrentWeather } from "../redux/operations/queryCurrentWeatherOperation";
import {
  getCurrentWeather,
  getFavotiteCities,
} from "../redux/selectors/currentWeatherSelectors";
import { addFavoriteCity } from "../redux/actions/favoriteCityesAction";

import CurrentWeatherCard from "../components/CurrentWeatherCard/CurrentWeatherCard";

const mapStateToProps = (state) => ({
  currentWeatherData: getCurrentWeather(state),
  favoriteCities: getFavotiteCities(state),
});

const mapDispatchToProps = {
  getCurrentWeather: fetchCurrentWeather,
  setFavoriteCity: addFavoriteCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherCard);
