import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";
import Avatar from "@material-ui/core/Avatar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1dc690",
    },
    secondary: {
      main: "#6a6c6c",
    },
    ternary: {
      main: "#37393a",
    },
  },
});

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#F5F5F5",
    borderRadius: "10px",
    paddingBottom: "0",
    backgroundColor: "#2b2d2d",
    alignSelf: "flex-start",
  },
  media: {
    height: 140,
  },

  smallIcon: {
    width: 2,
    height: 2,
  },
  header: {
    height: 170,
  },
  avatar: {
    paddingTop: 1,

    width: 120,
    height: 120,
    margin: "auto",
    zIndex: 150,
  },

  description: {
    display: "flex",
    flexDirection: "row",
    height: "100%",

    alignSelf: "flex-start",
  },

  footer: {
    bottom: 0,
    display: "flex",
  },

  typography: {
    textAlign: "left",
    paddingTop: '10%',
    paddingBottom: '10%',
    nowrap: "true",
   
    color: "#F5F5F5",
  },

  spa: {
    paddingBottom: 2,
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
    paddingTop: 18,
    paddingBottom: 25,
    paddingLeft: "3px",
    paddingRight: "3px",

    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.4),
    },
  },
  typography: {
    nowrap: "true",
  
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const classes1 = useStyles1();

  const colors = {
    Python: "#306998",
    C: "#0066cc",
    "C++": "#00008b",
    LINUX: "#dd4814",
    JavaScript: "black",
    Nodejs: "#006400",
    Reactjs: "black",
    GraphQL: "#d11b95",
    PostgreSql: " #336791",
    Redis: "#8B0000",
    AWS: "#FF9900",
  };
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.header}
          style={{ backgroundColor: "#404242" }}
        >
          <div className={classes1.root}>
            {props.topics.map((index) => {
              return (
                <Chip
                  className="Python"
                  color="secondary"
                  key={index}
                  size="small"
                  style={{
                    fontSize: 11,
                    color: "whte",
                    fontWeight: 500,
                    backgroundColor: colors[index],
                    boxShadow: "1px 1px 1px #2b2d2d ",
                  }}
                  label={index}
                />
              );
            })}
          </div>
          <Avatar className={classes.avatar} src={props.avatarUrl} />
        </CardActionArea>

        <CardActionArea
          className={classes.description}
          style={{ backgroundColor: "#2b2d2d" }}
        >
          <CardContent   style={{paddingTop: '25%', alignSelf: "flex-start"}}>
            <Typography
              className={classes.name}
              style={{
                textAlign: "center",
                color: "#F5F5F5",
              }}
              variant="h5"
              component="h2"
            >
              {props.name}
            </Typography>

            <Typography
              className={classes.typography}
              variant="body2"
              color="primary"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <LocationCityTwoToneIcon
                  color="primary"
                  fontSize="small"
                  style={{ paddingRight: 8, paddingBottom: 4 }}
                />
                {props.location}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <WorkTwoToneIcon
                  color="primary"
                  style={{ paddingRight: 8, paddingBottom: 4 }}
                  fontSize="small"
                />{" "}
                {props.profession}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SchoolTwoToneIcon
                  color="primary"
                  style={{ paddingRight: 8, paddingBottom: 4 }}
                  fontSize="small"
                />{" "}
                {props.school}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardContent className={classes.footer} style={{ padding: 0 }}>
          <CardActionArea
            target="_blank"
            component="a"
            href="https://github.com/chinmay60/"
            style={{
              width: "50%",
              backgroundColor: "#1dc690",
              color: "black",
              textTransform: "none",
              margin: 0,
              fontWeight:'700'
            }}
          >
            <CardActions
              style={{ justifyContent: "center", height: "inherit" }}
            >
              <GitHubIcon style={{ paddingRight: 5 }} />
              {"GitHub"}
            </CardActions>
          </CardActionArea>
          <CardActionArea
            target="_blank"
            component="a"
            href="https://www.linkedin.com/in/chinmay-vinchurkar/"
            style={{
              width: "50%",
              backgroundColor: "#2867B2",
              color: "white",
              textTransform: "none",
            }}
          >
            <CardActions
              style={{ justifyContent: "center", height: "inherit" }}
            >
              Linked
              <LinkedInIcon />
            </CardActions>
          </CardActionArea>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
