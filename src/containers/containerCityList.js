import { connect } from "react-redux";
import { getFavotiteCities } from "../redux/selectors/currentWeatherSelectors";

import CityList from "../components/CityList/CityList";

const mapStateToProps = (state) => ({
  favoriteCities: getFavotiteCities(state),
});

export default connect(mapStateToProps)(CityList);
