import React from 'react';
import classes from './App.module.css';
import Aux from './components/Auxilliary'
import GraphQLClient from './components/Client'
import PinnedItems from './components/PinnedItems'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <Aux>

    <div className={classes.App} style = {{ paddingTop: 20, paddingBottom: 20}}>
    <span style={{color:'white', textAlign: 'left', fontSize:30}}>@chinmay</span>
    <Button
    size="small"
      style = {{float: 'right'}}
        variant="contained"
        color="primary"
        className={classes.button}
         startIcon={<EmailIcon />}>
        Email Me
      </Button>
    </div>



    <div className={classes.App}>
      <GraphQLClient>
          <PinnedItems />
      </GraphQLClient>
    </div>
    </Aux>
  );
}

export default App;
