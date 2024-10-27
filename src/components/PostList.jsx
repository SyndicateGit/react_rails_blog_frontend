import { useState, useEffect } from 'react';
import { API_URL } from '../constants';

const PostList = () => {
  // Fetch posts from the API
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function loadPosts(){
      try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        setPosts(data);
      }catch (error) {
        console.error(error);
      } 
    }
    loadPosts();
  }, []);
  
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostList;