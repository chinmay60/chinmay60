import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { motion, AnimatePresence } from 'framer-motion'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import MessageIcon from '@material-ui/icons/Message';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#379683",
    },
    secondary: {
      main: '#379683',
    },
    ternary:{
      main: '#379683',
    }
  },
});



const useStyles = makeStyles((theme) => ({
  root: {


  minHeight:482 ,
  maxHeight: '100%',

  color:"#F5F5F5",
  borderRadius:"10px",
  paddingBottom:"0",
  backgroundColor:"#edc7b7",


},

}));

export default function RecipeReviewCard(props) {
  const [readMore, setReadMore] = useState(false)
  const classes = useStyles();



  return (


    <ThemeProvider theme={theme}>
    <div style = {{color: '#F5F5F5', fontSize:30, textAlign: 'left', paddingBottom: 10, fontFamily: 'Hind Madurai'}}> Bio
    </div>
    <Card className={classes.root} style={{backgroundColor:"#2b2d2d", fontFamily: 'Hind Madurai'}}>

<div style={{padding: '3%'}}>
          <Typography paragraph align="left" >
            {props.text}

          </Typography>

  <CardActions style = {{padding:0}}>
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
                               <Button style = {{color: '#F5F5F5', padding:0}}
                                 onClick={() => setReadMore(false)}
                                 className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                               >
                                 <ExpandLessIcon  />
                                 <span style = {{textTransform: 'lowercase'}}>show less</span>
                               </Button>


          <p>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.

            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            nd mussels, tucking them down into the rice, and cook
            again without stirring, uopened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
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
                    >
                      <Button style = {{color: '#F5F5F5', padding:0}}
                        onClick={() => setReadMore(true)}>
                        <ExpandMoreIcon  />
                        <span style = {{textTransform: 'lowercase'}}>show more</span>
                      </Button>
                    </motion.div>
                  )}

              </AnimatePresence>
</CardActions>



 <p style={{fontSize: 25}}>
                   Whether you're looking to hire an eager self-starter or
                   build your network, I'd love to hear your story.
                 </p>

</div>


<Typography>
<MessageIcon color='primary' style={{paddingLeft:'3%'}} />  DMs are open on  <Link href="https://www.linkedin.com/in/chinmay-vinchurkar/"> link </Link>
</Typography>
    </Card>
    </ThemeProvider>
  );
}
