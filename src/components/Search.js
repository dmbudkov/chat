import React from 'react';
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";

const Search = ({ filterApply }) => {

  const handleFilterApply = e => {
    filterApply(e.target.value)
  };

  return (
    <Toolbar>
      <TextField fullWidth
                 type="search"
                 label="Поиск"
                 onChange={handleFilterApply}
      />
    </Toolbar>
  );
};

Search.propTypes = {
  filterApply: PropTypes.func
};

export default Search;