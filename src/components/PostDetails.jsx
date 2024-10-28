import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { API_URL } from '../constants'

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PostDetails
