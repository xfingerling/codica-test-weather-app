import * as Types from "../Types";

const addFavoriteCity = (state = [], { type, payload }) => {
  switch (type) {
    case Types.ADD_FAVORITE_CITY:
      return [...payload];

    default:
      return state;
  }
};

export default addFavoriteCity;
