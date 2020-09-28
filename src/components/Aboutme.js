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
  height: 530,

    color:"#F5F5F5",
    borderRadius:"10px",
    paddingBottom:"0",
    backgroundColor:"#2b2d2d",

  },
  media: {
    height: 140
  },

  smallIcon: {
    width: 40,
    height: 40,
  },
  header:{
    height:170,



  },
  avatar: {

    paddingTop: 1,


    width: 120,
    height: 120,
    margin: 'auto',
    zIndex: 150,
  },

  description:{
    height:310,

  },

  typography: {
    textAlign:'left',
    paddingTop: 30,
    nowrap : "true",
    paddingLeft: 10,
    color: '#F5F5F5',
  },

  spa:{
    paddingBottom: 2
  }

});

const useStyles1 = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
    paddingTop: 18,
    paddingBottom:25,

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

  const classes = useStyles();
  const classes1 = useStyles1();

  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root} >

      <CardActionArea className={classes.header} style={{backgroundColor:"#404242", fontFamily: 'Hind Madurai'}}>
        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip color="secondary" key={index} size="small" style={{ fontSize: 11, color:"white", boxShadow: "1px 1px 1px #2b2d2d "}}   label={index} />
          })}
        </div>
          <Avatar  className={classes.avatar}  src={props.avatarUrl} />
      </CardActionArea>


      <CardActionArea className={classes.description} style={{backgroundColor:"#2b2d2d", fontFamily: 'Hind Madurai'}}>
        <CardContent  align="left">
          <Typography className = {classes.name} style={{ textAlign: 'center', color: "#F5F5F5", paddingTop: 15}}   variant="h5" component="h2">
            {props.name}
          </Typography>

          <Typography className={classes.typography} variant="body2" color="primary" component="p">
              <div style={{  display: 'flex',  alignItems: 'center', paddingBottom:8, fontFamily: 'Roboto'}}>
              <LocationCityTwoToneIcon fontSize = "small" style={{  color: "#F5F5F5", paddingRight: 8, paddingBottom: 4 }} />
              {props.location}
              </div>
              <div style={{  display: 'flex',  alignItems: 'center', paddingBottom:8}}>
              <WorkTwoToneIcon style={{  color: "#F5F5F5", paddingRight: 8, paddingBottom: 4  }} fontSize = "small" />  {props.profession}
              </div>
              <div style={{  display: 'flex',  alignItems: 'center'}}>
              <SchoolTwoToneIcon style={{  color: "#F5F5F5", paddingRight: 8, paddingBottom: 4 }}  fontSize = "small" />  {props.school}
              </div>
          </Typography>
        </CardContent>
      </CardActionArea>


        <Button component="a" href="https://github.com/chinmay60" style={{width:"50%",fontWeight: '600', backgroundColor:"#1dc690",color:"black",textTransform:"none", fontFamily: 'Hind Madurai'}}><CardActions><GitHubIcon /> {'GitHub'}</CardActions></Button>
          <Button component="a" href="https://www.linkedin.com/in/chinmay-vinchurkar/"  style={{width:"50%",backgroundColor:"#2867B2",color:"#F5F5F5", textTransform:"none", fontFamily: 'Hind Madurai'}}><CardActions>Linked <LinkedInIcon/></CardActions></Button>



    </Card>
  </ThemeProvider>


  );
}
