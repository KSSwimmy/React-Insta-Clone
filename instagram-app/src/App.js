import React from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from '../src/dummy-data';

//You can import default exports as anything you want, but it's smart to import it exactly how it's being exported. 

//it keeps life simple when trying to debug

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
     }
  }
  render() { 
    return ( 
   <div className="App">
      
    <SearchBar />
    <PostContainer /> 
   
  </div> 
  );
  }
}
 
export default App;

