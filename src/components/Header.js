import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastYPos, setLastYPos] = useState(0)
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = () => {
      const Y = window.scrollY
      if (Y < lastYPos - 10) {
        setIsScrollingUp(true)
        setLastYPos(Y)
      } else if (Y > lastYPos + 10) {
        setIsScrollingUp(false)
        setLastYPos(Y)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastYPos])

  return (
    <div className={classes.root}>
    <motion.div
      className='sticky top-0 z-50 py-2 bg-gray-100 bg-opacity-50 backdrop-blur'
      initial={{ opacity: 1 }}
      animate={{
        opacity: isScrollingUp ? 1 : 0,
        y: isScrollingUp ? 0 : '-50px'
      }}
    >
    <AppBar position="static" style={{ float: 'left', background:"#262828", color:"white", boxShadow:"None"}}>

      <Toolbar style = {{paddingLeft:0, paddingRight:0}}>

          <Typography variant="h6" className={classes.title}>
          @chinmay60
          </Typography>
          {/*<button className='flex items-center justify-center p-1 px-2 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent rounded bg-gray-70 hover:bg-gray-50 hover:text-white focus:outline-none focus:border-gray-10'>
            <DocumentText className='w-4 h-4 mr-1' />
            resume
  </button>*/}
  <Button color="inherit"><EmailIcon style={{color:"#4faeae"}}/>Email Me</Button>

  </Toolbar>
</AppBar>
    </motion.div>
  </div>
  )
}
