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




    <div className={classes.App}>
      <GraphQLClient>
          <PinnedItems />
      </GraphQLClient>
    </div>

  );
}

export default App;
