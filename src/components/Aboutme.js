import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';



const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#4faeae",
    },
    secondary: {
      main: '#6a6c6c',
    },
    ternary:{
      main: '#37393a',
    }
  },
});

const useStyles = makeStyles({
  root: {
    width:325,
    maxWidth: 360,
    minWidth: 325,
    height:550,
    color:"white",
    borderRadius:"10px",
    paddingBottom:"0",
    backgroundColor:"#2b2d2d",

  },
  media: {
    height: 140
  },
  html: {
    fontSize: 12
  },
  smallIcon: {
    width: 40,
    height: 40,
  },
  header:{
    height:208,



  },
  avatar: {
    top: 18,
    width: 120,
    height: 120,
    margin: 'auto',
    zIndex: 150,
  },

  description:{
    height:292,

  },

  typography: {
    nowrap : "true",
    paddingLeft: 30,
    color: 'white',
  },

  spa:{
    paddingBottom: 2
  }

});

const useStyles1 = makeStyles((theme) => ({
  root: {
    paddingTop: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.4)
    }
  },
  typography: {
    nowrap : "true",
    paddingTop: 60,
  }


}));

export default function MediaCard(props) {
  const matches = useMediaQuery('(min-width:600px)');

  const classes = useStyles();
  const classes1 = useStyles1();

  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root} >

      <CardActionArea className={classes.header} style={{backgroundColor:"#404242"}}>
        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip color="secondary" key={index} size="medium" style={{ fontSize: 10, color:"white", boxShadow: "1px 1px 1px #2b2d2d "}}  label={index} />
          })}
        </div>
          <Avatar  className={classes.avatar}  src={props.avatarUrl} />
      </CardActionArea>


      <CardActionArea className={classes.description} style={{backgroundColor:"#2b2d2d"}}>
        <CardContent  align="left">
          <Typography className = {classes.name} style={{ textAlign: 'center', color: "white", paddingTop: 15}}   variant="h5" component="h2">
            {props.name}
          </Typography>

          <Typography className={classes.typography} variant="body2" color="primary" component="p">
              <div style = {{paddingBottom: 2, color: "grey", fontWeight: 650}}>
              <LocationCityTwoToneIcon fontSize = "small" style={{  color: "white", }} /> {props.location}
              </div>
              <div style = {{paddingBottom: 2, color: "grey", fontWeight: 650}}>
              <WorkTwoToneIcon style={{  color: "white",  }} fontSize = "small" /> {props.profession}
              </div>
              <div style = {{paddingBottom: 2, color: "grey", fontWeight: 650}} >
              <SchoolTwoToneIcon style={{  color: "white",  }}  fontSize = "small" /> {props.school}
              </div>
          </Typography>
        </CardContent>
      </CardActionArea>


        <Button style={{width:"50%",backgroundColor:"black",color:"white",textTransform:"none", bottom:0}}><CardActions><GitHubIcon /> {'GitHub'}</CardActions></Button>
          <Button  style={{width:"50%",backgroundColor:"#2867B2",color:"white", textTransform:"none"}}><CardActions>Linked <LinkedInIcon/></CardActions></Button>



    </Card>
  </ThemeProvider>


  );
}
