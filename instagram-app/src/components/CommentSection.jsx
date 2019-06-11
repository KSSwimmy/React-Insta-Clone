import React, {Component} from 'react';


class CommentSection extends Component {
    state = {
        comments: this.props.comments
    }
    //we're going to add comments to the individual state of each component. 
    
    render() {
        return (
           
            <div className="comment-section">
            
            {this.props.comments.map((comment => {
                return ( 
                <>

                <h3>{comment.username}</h3>
                <p>{comment.text}</p>
                
                </>
                )
            })}
            
             <p className="timestamp">{this.props.timestamp}</p>
             <input type="text" placeholder="add a comment..."/>
            </div>
        );
    }
}

export default CommentSection;