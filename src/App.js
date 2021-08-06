import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArticleList from './components-submodule/articleList'


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero:{
    alignItems: "center",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    justifyContent: "center",
    padding: "20px"

  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>List of Articles</Box>
      </Box>
      <ArticleList />
    </div>
  );
}

export default App;
