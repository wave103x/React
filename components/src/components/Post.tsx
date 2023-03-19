import React from 'react';
import TPost from '../Types/Post';

export default function Post({ title, id, body }: TPost) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{title}</strong>
        <div>{body}</div>
        <div className="post__btns">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}
