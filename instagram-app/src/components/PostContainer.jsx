import React, {Component} from 'react';
import CommentSection from '../components/CommentSection'
//the main reason to use a class component is to have access to that state

class PostContainer extends Component {
   
    render() { 
        return ( 
            <div className="post-container">
                {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                    return (
                         //   fragment wrapper 
                        <>

                        <header>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <h3>{post.username}</h3>
                        </header>

                        <img src={post.imageUrl} alt={post.id}/>

                        <section className="likebar">
                            {post.likes} likes
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />

                        </>
                   ) //  return

                }) : this.props.filteredPosts.map(post => {
                    return (
                        <>

                        <header>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <h3>{post.username}</h3>
                        </header>

                        <img src={post.imageUrl} alt={post.id}/>

                        <section className="likebar">
                            {post.likes} likes
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />

                        </>
                    ) }
                )
                }
        </div>
    )
}
}

//passing input into thw comment section
 
export default PostContainer;

////  Fragments //// - A common pattern in React is for a component to return multiple elements. Fragments lets you group a list of children without adding extra NODES to the DOM. ' <> </> '