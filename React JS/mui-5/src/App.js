import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
function App() {
  return (
    <React.Fragment>
      <h1>Floating Action Button </h1>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>

      ---------
      <Fab variant="extended" color="success">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </React.Fragment>
  );
}

export default App;
