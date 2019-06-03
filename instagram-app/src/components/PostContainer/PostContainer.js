import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import PropTypes from "prop-types";

const PostContainer = (props) => {
  return(
    <div className='post-container'>
      <div className='post-logo'>
        <img src={props.post.thumbnailUrl}/>
        <h3>{props.post.username}</h3>
      </div>
      <div className='post-image'>
        <img src={props.post.imageURL} />
      </div>
      <div className='post-icon'>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
      </div>
      <div className='post-likes'>{props.post.likes}</div>
      <CommentSection comments={props.post.comments} />
      <div className='post-date'>{props.post.timestamp}</div>
    </div>
  )
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