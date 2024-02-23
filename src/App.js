import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  // State to store posts fetched from API
  const [posts, setPosts] = useState([]);
  
  // Fetch posts from API when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts) // Set fetched posts to state
      .catch((error) => {
        console.log(error); // Log any errors that occur during fetch
      });
  }, []); // Empty dependency array ensures useEffect runs only once after component mount

  // Render PostDetail component and pass fetched posts as props
  return (
    <div className="App">
      <PostDetail posts={posts}/>
    </div>
  );
}

export default App;
