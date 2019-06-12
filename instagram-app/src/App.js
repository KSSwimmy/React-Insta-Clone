import React from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from '../src/dummy-data';

//You can import default exports as anything you want, but it's smart to import it exactly how it's being exported. 

//it keeps life simple when trying to debug


import './App.css';

class App extends React.Component {
  state = { 
    data: [],
    // //the empty array is going to be filled with the dummyData
    filteredPosts: []
  };

  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    this.setState({data: dummyData}) //
  }

  //searchFiler Method so that we can filter our posts. Which means we're going to filter our data
  searchFilter = e => {
    const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ filteredPosts: filtered}) //if anything meets the state "filteredPosts" 
  }
//.includes lets you check the user name that you're searching for {e.target.value}

  //
  render() {
    console.log('render',this.state.data); 
    return ( 
      <div className="App">
        <SearchBar 
          newSearch={this.state.search}
          searchFilter={this.searchFilter} //it filers out new searches in the search bar
        />

        <PostContainer data={this.state.data} filteredPosts={this.state.filteredPosts} searchFilter={this.searchFilter} />
    </div>
     );
   
  }
}
 
export default App;


// class App extends React.Component {
//    state = { 
//       data: [], //ComponentDidMount
     
//   }

// //the empty array is going to be filled with the dummyData

//   componentDidMount(){ //componentDidMount is updating our state
//     this.setState({
//       data: dummyData
//     })
//   }

//   render() { 
//     return ( 
//    <div className="App">
      
//     <SearchBar />
//     <PostContainer /> 
   
//   </div> 
//   );
//   }
// }
 
// export default App;

