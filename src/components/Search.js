import React from 'react';
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";


export default () => (
  <Toolbar>
    <TextField fullWidth type="search" label="Search" />
  </Toolbar>
);