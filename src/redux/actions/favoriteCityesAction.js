import * as Types from "../Types";

export const addFavoriteCity = (city) => ({
  type: Types.ADD_FAVORITE_CITY,
  payload: city,
});
