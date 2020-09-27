import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import UpdateIcon from "@material-ui/icons/Update";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FlareIcon from "@material-ui/icons/Flare";
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
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
  
    color:"white",
    borderRadius:"10px",

    backgroundColor:"#555656",

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
    height:80,

  },
  description:{
    height:100
  },
  info:{
    height: 60

  },
  footer:{
    height:20
  },
});

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

export default function MediaCard(props) {
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      <CardActionArea className = {classes.header} style={{backgroundColor:"#404242" }}>
        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip color="secondary" key={index} size="small" style={{ fontSize: 10, color:"white"}}  label={index} />
          })}
        </div>
      </CardActionArea>
      <CardActionArea style={{backgroundColor:"#2b2d2d"}}>
        <CardContent className={classes.description} align="left">
          <Typography gutterBottom  variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.typography} variant="body2"  component="p">
            {props.description}
          </Typography>
        </CardContent>
        <Divider light={true} variant="middle" style={{backgroundColor:"#4faeae"}}/>
        <CardContent className={classes.info} align="left" >
          <Typography
            className={classes.html}

            display="block"
            gutterBottom
          >
            <UpdateIcon color="primary" style={{ fontSize: 12 }} label="" />
            {' '}{ props.date} {"on"} {props.commitBranch}
          </Typography>
          <Typography
            variant="caption"

            display="block"
            gutterBottom
          >
            <ChatBubbleOutlineIcon color="primary" style={{ fontSize: 12}} fontSize="small" label="" />
            {' '}{props.messageHeadline}
          </Typography>
          <Typography
            variant="caption"

            display="block"
            gutterBottom
          >
            <FlareIcon color="primary" style={{ fontSize: 12}} fontSize="small" label="" />
            {' '}{props.commitMessage} {" commits"}
          </Typography>
        </CardContent>
      </CardActionArea>
    <CardActionArea  style={{backgroundColor:"#4faeae"}}>
      <CardActions style={{justifyContent:'center', height:'inherit'}}>
        <GitHubIcon style={{height:'150%'}}/>
        GitHub
      </CardActions>
    </CardActionArea>


    </Card>
  </ThemeProvider>
  );
}
