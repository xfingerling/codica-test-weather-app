import { connect } from "react-redux";

import CityCard from "../components/CityList/CityCard/CityCard";
import { addFavoriteCity } from "../redux/actions/favoriteCityesAction";

const mapDispatchToProps = {
  setFavoriteCity: addFavoriteCity,
};

export default connect(null, mapDispatchToProps)(CityCard);
