import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { motion, AnimatePresence } from 'framer-motion'

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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



const useStyles = makeStyles((theme) => ({
  root: {

  minWidth: 325 ,
  maxWidth:675,
  minHeight:507,
  maxHeight: '100%',

  color:"white",
  borderRadius:"10px",
  paddingBottom:"0",
  backgroundColor:"#2b2d2d",


},

}));

export default function RecipeReviewCard(props) {
  const [readMore, setReadMore] = useState(false)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (


    <ThemeProvider theme={theme}>
    <div style = {{color: 'white', fontSize:30, textAlign: 'left', paddingBottom: 10}}> Bio
    </div>
    <Card className={classes.root} style={{backgroundColor:"#2b2d2d"}}>
      <CardActions>

          <Typography paragraph align="left" >
            {props.text}

          </Typography>

      </CardActions>
      <AnimatePresence exitBeforeEnter initial={false}>
                    {readMore ? (
                      <>
                        <motion.div
                          key='show less'
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='grid grid-flow-row gap-4'
                        >
                          <button
                            onClick={() => setReadMore(false)}
                            className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                          >
                            <span className='ml-1'>show less</span>
                          </button>
                          <h3>
                            <span
                              role='img'
                              aria-label='dice emoji'
                              className='mr-1'
                            >
                              🎲️{' '}
                            </span>
                            My First App
                          </h3>
                          <p>
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.
                            v
                            I created my first real app,
                            [BGQuickstart.com](https://bgquickstart.com),
                            because I wanted a faster way to choose a start
                            player when playing board games with friends. After
                            teaching myself React, I realized I had fallen in
                            love with the feeling of solving problems with code
                            and immediately started planning my next app.  I created my first real app,
                              [BGQuickstart.com](https://bgquickstart.com),
                              because I wanted a faster way to choose a start
                              player when playing board games with friends. After
                              teaching myself React, I realized I had fallen in
                              love with the feeling of solving problems with code
                              and immediately started planning my next app.
                              I created my first real app,
                              [BGQuickstart.com](https://bgquickstart.com),
                              because I wanted a faster way to choose a start
                              player when playing board games with friends. After
                              teaching myself React, I realized I had fallen in
                              love with the feeling of solving problems with code
                              and immediately started planning my next app.
                              v
                              I created my first real app,
                              [BGQuickstart.com](https://bgquickstart.com),
                              because I wanted a faster way to choose a start
                              player when playing board games with friends. After
                              teaching myself React, I realized I had fallen in
                              love with the feeling of solving problems with code
                              and immediately started planning my next app.
                              vv
                              I created my first real app,
                              [BGQuickstart.com](https://bgquickstart.com),
                              because I wanted a faster way to choose a start
                              player when playing board games with friends. After
                              teaching myself React, I realized I had fallen in
                              love with the feeling of solving problems with code
                              and immediately started planning my next app.
                              I created my first real app,
                              [BGQuickstart.com](https://bgquickstart.com),
                              because I wanted a faster way to choose a start
                              player when playing board games with friends. After
                              teaching myself React, I realized I had fallen in
                              love with the feeling of solving problems with code
                              and immediately started planning my next app.v

                          </p>
                          <p>
                            After some time, I decided to switch to a career in
                            software engineering and joined Flatiron School's to
                            accelerate the transition.
                          </p>
                          <h3>
                            <span
                              role='img'
                              aria-label='graduation cap emoji'
                              className='mr-1'
                            >
                              🎓️{' '}
                            </span>
                            Flatiron School
                          </h3>
                          <p>
                            At Flatiron, I learned Ruby, Ruby on Rails,
                            JavaScript, and React. It was exciting to learn how
                            to work with the back end side of things. Databases,
                            controllers, and routing were always confusing when
                            I tried to learn it on my own. But after learning
                            the basics at Flatiron, I've already gone on to
                            learn my way around Express, GraphQL, and NodeJS to
                            expand my backend repertoire.
                          </p>
                          <p>
                            I'm thrilled to continue expanding the skill-set I
                            developed as a student at Flatiron School.
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      <motion.div
                        key='show more'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className='grid grid-flow-row gap-4'
                      >
                        <button
                          onClick={() => setReadMore(true)}
                          className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                        >
                          <span className='ml-1'>show more</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
    </Card>
    </ThemeProvider>
  );
}
