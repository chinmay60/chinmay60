import React, { Component } from "react";
import classes from './App.module.css';
import GraphQLClient from './components/Client'
import PinnedItems from './components/PinnedItems'
import Loader from './components/Loader'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = { isLoading: true }
}

componentDidMount() {
    this.setState({isLoading: false})
}
  render() {
if (this.state.isLoading){
  return (
    <div>
      <Loader />
    </div>
  )
}
else{

  return (

    <div className={classes.App}>
      <GraphQLClient>
          <PinnedItems />
      </GraphQLClient>
    </div>

  );

}
  
}
}

export default App;
