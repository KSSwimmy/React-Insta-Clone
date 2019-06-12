import React, {Component} from 'react';


class CommentSection extends Component {
    state = {
        comments: this.props.comments
        newComment: ''
    }
    //we're going to add comments: to the individual state of each component.

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'KimberlyKimKimmy',
            text: this.state.newComment
        }
 
        this.setState({ 
            comments: [...this.state.comments, newComment], 
            newComment: ''
         })
    }
 
    
    changeHandler = event => {
        this.setState({
         [e.target.maps]: event.target.value
        })
    }
    
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
            <form onSubmit={this.addNewComment}>
                <input 
                type="text" 
                name="newComment" 
                value={this.state.newComment}
                onChange={this.changeHandler}
                placeholder="add a comment..."
            />
            </form>
        </div> 
        );
}
}

export default CommentSection;