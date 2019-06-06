import React from 'react';
import Comment from './Comment'

//Keeping comment-section not for styling but for the delete comment functionality

const CommentSection = (props) => {
  return (
    <div className='comment-section'>
      {props.comments.map(item => <Comment comment={item} key={item.id} removeComment={props.removeComment}/>)}
    </div>
  )
}

export default CommentSection;


