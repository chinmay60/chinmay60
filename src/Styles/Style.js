import React from "react";
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles({
  root: {
    width :350,
    height : 300
  },
  media: {
    height: 140
  },
  html: {
    fontSize: 12
  },
  smallIcon: {
    width: 2,
    height: 2,
  },
  header:{
    height:40
  },
  description:{
    height:100
  },
  info:{
    height: 40,
  },
  footer:{
    height:30
  },
});
const accent = purple['A200']
const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  typography: {
    nowrap : "true"
  }

}));
