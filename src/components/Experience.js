import React from "react";
import Aux from "./Auxilliary";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export default function FullWidthGrid(props) {
  return (
    <Aux>
      <Grid
        item
        xs={12}
        style={{ color: "#F5F5F5", marginTop: "5%", fontFamily: "Roboto" }}
      >
        <Typography variant="h5" component="h5">
          <span> Software Engineer Intern - CloudChef</span>
          <span style={{ color: "#F5F5F5", fontSize: 15, paddingLeft: 5 }}>
            (Dec 2018 – Feb 2019)
          </span>
        </Typography>

        <p>
          Software Engineer Intern @CloudChef a food based start-up in Mumbai
          where I got to work with some exciting Tech.
          <br /> <br />
          My work included:
        </p>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Collaborated in a cross-functional team to engineer component APIs for temperature sensing, heat control to achieve automation in product-making" />
          </ListItem>

          <Divider
            variant="inset"
            style={{ backgroundColor: "#1dc690" }}
            component="li"
          />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Built and tested classification models like Kernel SVMs and Random Forest to classify ingredients based on parameters like pH, L-values (HSL color space), density, etc. accomplishing an accuracy of 95%" />
          </ListItem>

          <Divider
            variant="inset"
            style={{ backgroundColor: "#1dc690" }}
            component="li"
          />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Established serial communication between Raspberry pi and Arduino on USB protocol for internal functioning of different Hardware Equipment Models in automated tea-making product
" />
          </ListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ color: "#F5F5F5", paddingTop: "3%", fontFamily: "Roboto" }}
      >
        <Typography variant="h5" component="h5">
          <span>
            {" "}
            Full Stack Developer Intern - DY Patil University{" "}
          </span>
          <span style={{ color: "#F5F5F5", fontSize: 15, paddingLeft: 5 }}>
            (June 2017 – May 2019)
          </span>
        </Typography>

        <p>
          Full Stack Developer Intern @DY Patil University, Navi Mumbai where I
          got to work with a range of web technology stack and databases. I was
          involved in Designing and building the main college website using PHP,
          React, bootstrap v4, and MySQL.
          <br /> <br /> My work included:
        </p>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText  primary="Designed and built the main college website using PHP, React, bootstrap v4, and MySQL" />
          </ListItem>

          <Divider
            variant="inset"
            style={{ backgroundColor: "#1dc690" }}
            component="li"
          />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Worked with a team of 8 to develop and maintain Content Management System allowing faculty and staff to manage different modules of the website" />
          </ListItem>

          <Divider
            variant="inset"
            style={{ backgroundColor: "#1dc690" }}
            component="li"
          />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Improved legacy front end by replacing it with ReactJs, Bootstrap, and custom stylesheets which resulted in 50% faster loading times" />
          </ListItem>

          <Divider
            variant="inset"
            style={{ backgroundColor: "#1dc690" }}
            component="li"
          />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeIcon />
            </ListItemAvatar>
            <ListItemText primary="Remodeled and migrated college database through MySQL and optimized the database by removing redundancy to save storage space by 20% " />
          </ListItem>
        </List>
      </Grid>
    </Aux>
  );
}
