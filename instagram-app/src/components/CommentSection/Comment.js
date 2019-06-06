import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
  padding: 1% 2%;

  > * {
    display: inline;
  }
  
  > h3 {
    font-weight: bold;
  }

  > p {
    padding-left: 0.6rem;
  }
`

const Comment = (props) => {

  return (
    <CommentDiv onClick={() => props.removeComment(props.comment)}>
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
    </CommentDiv>
  )
}

export default Comment;