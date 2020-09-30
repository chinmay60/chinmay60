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
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#4faeae",
    },
    secondary: {
      main: '#000000',
    },
    ternary:{
      main: '#37393a',
    }
  },
});

const useStyles = makeStyles({
  root: {
    height: 550,
    color:"#F5F5F5",
    borderRadius:"10px",

    backgroundColor:"#555656",

  },
  media: {
    height: 140
  },

html:{
  fontSize: 12
},

  smallIcon: {
    width: 2,
    height: 2,
  },
  header:{
    minHeight:80,

  },

  typography: {
    height: 700,
    nowrap : "true",
}

});

const useStyles1 = makeStyles((theme) => ({
  root: {
    padding:10,
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

const colors = {'python': '#306998', 'c': '#0066cc', 'cpp':'#00008b', 'linux':'#dd4814',
'javaScript':'black', 'nodejs':'#006400', 'reactjs': 'black', 'graphql' : '#d11b95',
'posgresql': ' #336791', 'redis': '#8B0000', 'aws':'#FF9900', 'mysql': '#00758F', 'django':'#092e20', 'material-ui':'#007acc',
 'netlify': '#008080', 'restful-api': '#800000', 'keras': '#B53737', 'tensorflow' : '#ff781f', 'redux': '#764abc', 'kibana':'#339999', 'cuda':'#7AB547', 'elasticsearch':'#ff0080' };

export default function MediaCard(props) {
  const classes = useStyles();
  const classes1 = useStyles1();

let repoimage = null
if(props.imagebool){

repoimage = <div style = {{padding: 15, paddingTop:0}}> <CardMedia
className={classes.media}
image={props.repoimage}
/>
</div>
}


  return (
  <ThemeProvider theme={theme} >
    <Card className={classes.root} style={{backgroundColor:"#404242", paddingTop:0, position: 'relative' }}>
      <CardActionArea className = {classes.header} style={{backgroundColor:"#404242" }}>


        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip color="secondary" key={index} size="small" style={{ backgroundColor:colors[index], fontSize: 12, color:"#F5F5F5", paddingTop:0}}  label={index} />



          })}



        </div>

        {repoimage}

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
        </CardActionArea>

        <CardActionArea style = {{padding:0, position: 'absolute',bottom:0}}>

        <Divider light={true} variant="middle" style={{backgroundColor:"#1dc690"}}/>

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

    <CardActionArea target="_blank" component="a" href={props.url} style={{ backgroundColor:"#1dc690"}}>
      <CardActions  style={{color: 'black', justifyContent:'center', height:'inherit'}}>
      <Button  style={{ fontSize: 15, fontWeight:'600' , padding:0, textTransform:"none", fontFamily: 'Hind Madurai'}} >
        <GitHubIcon style={{color: 'black', height:'150%', padding:0, paddingRight: 2}}/>
        GitHub
        </Button>
      </CardActions>

    </CardActionArea>
    </CardActionArea>



    </Card>
  </ThemeProvider>
  );
}
