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
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import SchoolIcon from '@material-ui/icons/School';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#007fff ",
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
  fontFamily: 'Hind Madurai',
  minHeight:482 ,

  color:"#ededed ",
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
    <div style = {{color: '#ededed  ', fontSize:30, textAlign: 'left', paddingBottom: 10}}> Bio
    </div>
    <Card className={classes.root} style={{backgroundColor:"#2b2d2d"}}>

<div style={{padding: '3%'}}>
          <Typography paragraph align="left" >
          I specialize in building Applications, Websites and everything in between.  <br />
          <br />
          Using technology to solve problems in the real world is something I'm passionate about.  While I have experience building software in C / C++ and Javascript, Python is my go-to language to solve most of the challenges I face. <br />
          <br />
          Developing software for the past six years, Most of my projects are independent and developed as a passion for programming. what drives me is my ability to quickly adapt to innovative tech and apply it to my productivity apps enhancing my day-to-day experience as well as people around me.

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
                               <Button style = {{color: '#bababa', padding:0}}
                                 onClick={() => setReadMore(false)}
                                 className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                               >
                                 <ExpandLessIcon  />
                                 <span style = {{textTransform: 'lowercase', color:'#bababa'}}>show less</span>
                               </Button>


          <Typography>
          <div style={{
              display: 'flex', paddingTop:10}}>
          <HomeWorkTwoToneIcon color="secondary" style={{paddingRight:5}} />
            My journey <br />
            <br />
          </div>

            I designed my first utility app in 7th grade, a basic calculator written in C++.
            I have always been fascinated by how programming could solve my problems and help others.
            As I learned more, I taught myself Python and started creating utility applications that can be used by
            anyone. After falling in love with programming in the school itself,
            career in software development was a given. I graduated with a Bachelor of Engineering in
            Information Technology and wanted to learn more.

            <div style={{
                display: 'flex', paddingTop:30}}>
            <SchoolIcon color="secondary" style={{paddingRight:5}} />
              University of Cincinnati <br />
              <br />
            </div>

            Pursuing Masters in Computer Science at the University of Cincinnati, I dived deep into Advanced Algorithms and Parallel Computing. Subsequently,
            I taught myself React and Redux and learned my way around designing APIs and databases for large-scale systems.
          <br />
          <br />
            I am thrilled to continue expanding my skill-set I developed at UC.



          </Typography>





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
                      <Button style = {{color: '#bababa', padding:0}}
                        onClick={() => setReadMore(true)}>
                        <ExpandMoreIcon  />
                        <span style = {{textTransform: 'lowercase'}}>show more</span>
                      </Button>
                    </motion.div>
                  )}

              </AnimatePresence>
</CardActions>

</div>

<div style={{padding:'3%'}}>
<p style={{fontSize: 22, fontWeight:500}}>
                  If you're looking to hire a driven Software Engineer or
                  expand your network, I'd love to hear from you.
</p>
<Typography style={{
    display: 'flex',
    alignItems: 'center'}}>

<MessageIcon color='primary' style={{paddingRight: 5}} />  DMs are open on  <Link style={{paddingLeft: 5}} href="https://www.linkedin.com/in/chinmay-vinchurkar/"> LinkedIn </Link>
</Typography>
</div>
    </Card>
    </ThemeProvider>
  );
}
