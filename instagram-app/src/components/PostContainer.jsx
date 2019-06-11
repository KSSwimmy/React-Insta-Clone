import React, {Component} from 'react';
import CommentSection from '../components/CommentSection'

//the main reason to use a class component is to have access to that state

class PostContainer extends Component {
    
    render() {
        return (
          <div className="post-container">
              {this.props.data.map(post => 
              {
                  return (
                    //   fragment wrapper 
                      <>
                        {/* thumbnail and username */}
                      <header> 
                          <img src={postMessage.thumbnailUrl} alt="thumbnail"/>
                      </header>

                        {/* post image */}
                      <img src={post.imgUrl} alt={post.id}/>

                    {/* the like bar */}
                    <section className="likebar"> 
                    {post.likes} likes
                    </section>

                    {/* the comment section */}
                    <CommentSection 
                    comments={post.comments}
                    timestamp={post.timestamp} />
                      </>

                  )
              })}
          </div>
        );
    }
}

export default PostContainer;

////  Fragments //// - A common pattern in React is for a component to return multiple elements. Fragments lets you group a list of children without adding extra NODES to the DOM. ' <> </> '
