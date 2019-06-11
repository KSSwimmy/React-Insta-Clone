import React, {Component} from 'react';

//the main reason to use a class component is to have access to that state

class SearchBar extends Component {
    
    render() {
        return (
            <input type='text' placeholder='search...' />
        );
    }
}

export default SearchBar;