import React, {Component} from 'react';
import CommentSection from '../components/CommentSection'

//the main reason to use a class component is to have access to that state

class PostContainer extends Component {
    
    render() {
        return (
            <CommentSection />
        );
    }
}

export default PostContainer;