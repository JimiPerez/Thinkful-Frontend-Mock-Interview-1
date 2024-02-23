import React, { useEffect, useState } from "react";

const PostDetail = ({posts}) => {
  // State to store comments fetched for a specific post
  const [comments, setComments] = useState([]);
  // State to store the id of the currently selected post
  const [postId, setPostId] = useState();
  
  // Function to handle click event on post button
  const handleClick = (postId) => {
    // Set the postId state to the id of the clicked post
    setPostId(postId);
  }
  
  // Effect hook to fetch comments when postId changes
  useEffect(() => {
    // Check if postId is truthy (not undefined or null)
    if(postId){
      // Fetch comments for the selected post
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then(setComments) // Set fetched comments to state
        .catch((error) => {
          console.log(error); // Log any errors that occur during fetch
        });
    }
  }, [postId]); // Dependency array ensures useEffect runs whenever postId changes
  
  return(
    <div>
      {/* Map through each post and render its details */}
      {posts.map((post) => (
        <div key={post.id}>
          {/* Render post title */}
          <h3>{post.title}</h3>
          {/* Render button for each post to view comments */}
          <button onClick={() => handleClick(post.id)}>{post.body}</button>
          {/* Render comments if postId matches current post.id */}
          {postId === post.id && (
            <div>
              <ul>
                {/* Map through each comment and render its details */}
                {comments.map((comment) => (
                  <li key={comment.id}>{comment.body}<br/>{comment.email}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default PostDetail;
