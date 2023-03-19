import React from 'react';
import Post from './Post';
import TPost from '../Types/Post';

function PostList({posts, title}: {posts: TPost[], title: string}) {
  return (
    <>
      <h1>{title}</h1>
      {posts.map((post: TPost) => <Post id={post.id} title={post.title} body={post.body} key={post.id}/>)}
    </>
  );
}

export default PostList;
