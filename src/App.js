import React, { Component } from "react";
import classes from "./App.module.css";
import GraphQLClient from "./components/Client";
import PinnedItems from "./components/PinnedItems";
import ReactGa from 'react-ga';



class App extends Component {

componentDidMount() {
  ReactGa.initialize('UA-187432547-1')

  
  // to report page view 
  ReactGa.pageview('/')

}
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
