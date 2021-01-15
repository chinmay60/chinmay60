import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { motion, AnimatePresence } from "framer-motion";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MessageIcon from "@material-ui/icons/Message";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import SchoolIcon from "@material-ui/icons/School";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007fff ",
    },
    secondary: {
      main: "#1dc690",
    },
    ternary: {
      main: "#379683",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    height: "inherit",
    color: "#ededed ",
    borderRadius: "10px",
    paddingBottom: "0",
    backgroundColor: "#edc7b7",
  },

  html: {
    fontSize: 12,
  },
}));

export default function RecipeReviewCard(props) {
  const [readMore, setReadMore] = useState(false);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          color: "#ededed  ",
          fontSize: 30,
          textAlign: "left",
          paddingBottom: 10,
        }}
      >
        {" "}
        Bio
      </div>
      <Card className={classes.root} style={{ backgroundColor: "#2b2d2d" }}>
        <div style={{ padding: "3%" }}>
          <Typography paragraph align="left">
            I specialize in building Applications, Websites, and everything in
            between. <br />
            <br />
            Using technology to solve problems in the real world is something
            I'm passionate about. Though I have experience working as a
            full-stack developer using languages like TypeScript/Javascript,
            frameworks like React/Redux on the frontend, and Python,
            ExpressJs/NodeJS at the backend, I have also built desktop and
            productivity applications working with C++ and python. <br />
            <br />
            My six-year Background in Software Development with a Master's
            degree in Computer Science allows me to have a fundamental
            understanding of how a system is designed and quickly grasp and
            adapt to new technologies.
          </Typography>

          <CardActions style={{ padding: 0 }}>
            <AnimatePresence exitBeforeEnter initial={false}>
              {readMore ? (
                <>
                  <motion.div
                    key="show less"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-flow-row gap-4"
                  >
                    <Button
                      style={{ color: "#bababa", padding: 0 }}
                      onClick={() => setReadMore(false)}
                      className="flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40"
                    >
                      <ExpandLessIcon />
                      <span
                        style={{ textTransform: "lowercase", color: "#bababa" }}
                      >
                        show less
                      </span>
                    </Button>

                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          paddingTop: 10,
                        }}
                      >
                        <HomeWorkTwoToneIcon
                          color="secondary"
                          style={{ paddingRight: 5 }}
                        />
                        My journey <br />
                        <br />
                      </div>
                      I designed my first app in 7th grade, a basic calculator
                      written in C++. I taught myself Python and started
                      creating utility/productivity applications for general
                      use. I graduated with a Bachelor of Engineering in
                      Information Technology and went on to pursue a master's
                      degree in Computer Science at the University of
                      Cincinnati.
                      <div
                        style={{
                          display: "flex",
                          paddingTop: 30,
                        }}
                      >
                        <SchoolIcon
                          color="secondary"
                          style={{ paddingRight: 5 }}
                        />
                        University of Cincinnati <br />
                        <br />
                      </div>
                      Pursuing Masters in Computer Science at the University of
                      Cincinnati, I dived deep into Advanced Algorithms and
                      Parallel Computing. Subsequently, I taught myself React
                      and Redux and learned my way around designing APIs and
                      databases for large-scale systems.
                      <br />
                      <br />I am thrilled to continue expanding the skill-set I
                      developed at UC.
                    </Typography>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  key="show more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <Button
                    style={{ color: "#bababa", padding: 0 }}
                    onClick={() => setReadMore(true)}
                  >
                    <ExpandMoreIcon />
                    <span style={{ textTransform: "lowercase" }}>
                      show more
                    </span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardActions>
        </div>

        <div
          style={{
            paddingRight: "3%",
            paddingLeft: "3%",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          If you're looking to hire a driven Software Engineer or expand your
          network, I'd love to hear from you.
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 40,
              paddingBottom: 20,
            }}
          >
            <MessageIcon color="secondary" style={{ paddingRight: 5 }} /> DMs
            are open on{" "}
            <Link
              target="_blank"
              component="a"
              style={{ paddingLeft: 5 }}
              href="https://www.linkedin.com/in/chinmay-vinchurkar/"
            >
              {" "}
              LinkedIn{" "}
            </Link>
          </Typography>
        </div>
      </Card>
    </ThemeProvider>
  );
}
