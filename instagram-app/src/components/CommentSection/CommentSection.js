import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
  return (
    <div>
      {props.comments.map(item => <Comment comment={item} key={item.id} removeComment={props.removeComment}/>)}
    </div>
  )
}

export default CommentSection;


