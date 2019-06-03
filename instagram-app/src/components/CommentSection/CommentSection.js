import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
  return (
    <div className='comment-section'>
      {props.comments.map(item => <Comment comment={item} key={item.id}/>)}
    </div>
  )
}

export default CommentSection;


