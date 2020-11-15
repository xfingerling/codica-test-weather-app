import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import CityCard from "../../containers/containerCityCard";

import styles from "./CityList.module.css";

const CityList = ({ favoriteCities }) => {
  const listItems = favoriteCities.map((el) => (
    <Grid item key={el} xs={12} sm={6} md={4}>
      <CityCard cityName={el} />
    </Grid>
  ));

  return (
    <Grid container justify="center" className={styles.list} spacing={2}>
      {listItems}
    </Grid>
  );
};

CityList.propTypes = {
  favoriteCities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CityList;
