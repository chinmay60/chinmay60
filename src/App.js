import React, { Component } from "react";
import classes from "./App.module.css";
import GraphQLClient from "./components/Client";
import PinnedItems from "./components/PinnedItems";



class App extends Component {


  render() {
    
    return (
     
        <div className={classes.App}>
          <GraphQLClient>
            <PinnedItems dataRetrived={this.isDataRetrived} />
            
          </GraphQLClient>
        </div>

    );
  }
}

export default App;
