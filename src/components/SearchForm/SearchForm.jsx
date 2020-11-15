/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./SearchForm.module.css";

const initialState = { input: "" };

const SearchForm = ({ getCurrentWeather }) => {
  const [state, setState] = useState(initialState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    getCurrentWeather(state.input);
    setState(initialState);
  };

  const handlerInput = ({ target }) => {
    setState({ input: target.value });
  };

  return (
    <form className={styles.form} noValidate onSubmit={handlerSubmit}>
      <div className={styles.wrap}>
        <TextField
          id="standard-basic"
          label="Search..."
          variant="outlined"
          value={state.input}
          onChange={handlerInput}
        />
        <Button type="submit" color="primary" className={styles.btn}>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
