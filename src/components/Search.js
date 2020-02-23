import React from 'react';
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";

export default ({ filterApply }) => {

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
}