import React from "react";
import Grid from "@material-ui/core/Grid";
import AboutMe from "./Aboutme";
import Bio from "./Bio";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function FullWidthGrid(props) {
  const topics = [
    "Python",
    "C",
    "C++",
    "LINUX",
    "JavaScript",
    "Nodejs",
    "Reactjs",
    "GraphQL",
    "PostgreSql",
    "Redis",
    "AWS",
  ];
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        spacing={4}
        alignItems="center"
        style={{ paddingTop: "1%" }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <AboutMe
            topics={topics}
            name={props.info.name}
            company={props.info.company}
            avatarUrl={props.info.avatarUrl}
            location="Cincinnati, OH (Open to relocation)"
            profession="Software Engineer"
            school="University of Cincinnati"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Bio text={props.info.repository.object.text} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
