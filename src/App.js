import React from 'react';
import classes from './App.module.css';
import GraphQLClient from './components/Client'
import PinnedItems from './components/PinnedItems'

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
