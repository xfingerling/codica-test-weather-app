import { connect } from "react-redux";
import { fetchCurrentLocalWeather } from "../redux/operations/localWeatherOperation";
import { addFavoriteCity } from "../redux/actions/favoriteCityesAction";

import HomePage from "../pages/HomePage";

const mapDispatchToProps = {
  getCurrentWeather: fetchCurrentLocalWeather,
  setFavoriteCity: addFavoriteCity,
};

export default connect(null, mapDispatchToProps)(HomePage);
