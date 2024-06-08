// components/Post.js
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <p>{post.content}</p>
      <small>Posted by: {post.author}</small>
    </div>
  );
};

export default Post;

// components/PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

