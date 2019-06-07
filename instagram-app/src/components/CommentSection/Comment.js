import React from 'react';
import { CommentDiv, CommentText, DeleteCommentButton } from './CommentSectionStyles'

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    }
  }

  mouseEnter = () => {
    this.setState({
      isMouseInside: true
    })
  }

  mouseLeave = () => {
    this.setState({
      isMouseInside: false
    })
  }

  render() {
    return (
      <CommentDiv onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <CommentText>
          <h3>{this.props.comment.username}</h3>
          <p>{this.props.comment.text}</p>
        </CommentText>
        { this.state.isMouseInside && this.props.comment.username === localStorage.getItem('username') ? <DeleteCommentButton onClick={() => this.props.removeComment(this.props.comment)}>DELETE</DeleteCommentButton> : null}
      </CommentDiv>
    )
  }
}

export default Comment;