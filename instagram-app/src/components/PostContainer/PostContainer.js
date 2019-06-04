import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment';
import PropTypes from "prop-types";
import './PostContainer.scss';

class PostContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: props.post,
      comments: props.post.comments,
      input: ''
    }
  }

  submitInput = (event) => {
    event.preventDefault();

    const newComment = {
      id: this.state.comments.length + 1,
      username: 'testuser',
      text: this.state.input
    }

    this.setState(prevState => {
      return { 
        comments: [...prevState.comments, newComment],
        input: ''
      }
    })
  }

  changeInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return(
      <div className='post-container'>
        <div className='post-logo'>
          <img src={this.state.data.thumbnailUrl} />
          <h3>{this.state.data.username}</h3>
        </div>
        <div className='post-image'>
          <img src={this.state.data.imageUrl} />
        </div>
        <div className='post-icon'>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div className='post-likes'>{this.state.data.likes} likes</div>
        <CommentSection comments={this.state.comments} />
        <div className='post-date'>{moment(this.state.data.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</div>
        <form className='comment-form' onSubmit={this.submitInput}>
          <textarea onChange={this.changeInput} value={this.state.input} placeholder='Add a comment...'></textarea>
          <button style={{color: this.state.input === '' ? 'rgb(196, 196, 196)' : 'rgb(77, 77, 235)'}} disabled={this.state.input === ''}>Post</button>
        </form>
      </div>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
}

export default PostContainer;