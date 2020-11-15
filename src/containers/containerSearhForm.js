import { connect } from "react-redux";
import { fetchCurrentWeather } from "../redux/operations/queryCurrentWeatherOperation";

import SearchForm from "../components/SearchForm/SearchForm";

const mapDispatchToProps = {
  getCurrentWeather: fetchCurrentWeather,
};

export default connect(null, mapDispatchToProps)(SearchForm);
