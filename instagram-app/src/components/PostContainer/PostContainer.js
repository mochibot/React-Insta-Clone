import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import PropTypes from "prop-types";
import { PostContainerDiv, PostLogoDiv, PostImage, PostIconDiv, PostLikesDiv, PostDateDiv, CommentForm, PostButton } from './PostContainerStyles'
import './PostContainer.scss';

class PostContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: props.post,
      comments: props.post.comments,
      input: '',
      likes: props.post.likes,
      liked: ''
    }
  }

  //keeping track of whether the post was liked or not
  componentDidMount() {
    if (!localStorage.getItem(`${this.props.post.id}-liked`)) {
      this.setState({
        liked: false
      })
    } else {
      this.setState({
        liked: JSON.parse(localStorage.getItem(`${this.props.post.id}-liked`))
      })
    }
  } 

  componentDidUpdate(prevProps, prevState) {
    const posts = JSON.parse(localStorage.getItem('data'));
    const newPosts = posts.map(item=> {
        if(item.id === this.props.post.id) {
          item.comments = this.state.comments;
          item.likes = this.state.likes;
          item.liked = this.state.liked;
        }
        return item;
    });
    localStorage.setItem('data', JSON.stringify(newPosts));
    localStorage.setItem(`${this.props.post.id}-liked`, this.state.liked);
  }
  
  addComment = (event) => {
    event.preventDefault();

    const newComment = {
      id: this.state.comments.length + 1,
      username: localStorage.getItem('username'),
      text: this.state.input
    }

    this.setState(prevState => {
      return { 
        comments: [...prevState.comments, newComment],
        input: ''
      }
    })
  }

  toggleLike = (event) => {
    event.preventDefault();
    let count = 0
    if (!this.state.liked) {
      count = 1;
    } else {
      count = -1;
    }
    this.setState(prevState => {
      return {
        liked: !prevState.liked,
        likes: prevState.likes + count
      }
    })
  }

  inputComment = (event) => {
    return this.setState({
      input: event.target.value
    })
  }

  removeComment = (props) => {
    this.setState(prevState => {
      return {
        comments: prevState.comments.filter(item => item.id !== props.id)
      }
    })
  }

  render() {
    return(
      <PostContainerDiv>
        <PostLogoDiv>
          <img src={this.state.data.thumbnailUrl} />
          <h3>{this.state.data.username}</h3>
        </PostLogoDiv>
        <PostImage src={this.state.data.imageUrl} />
        <PostIconDiv>
          <FontAwesomeIcon 
            icon={this.state.liked ? fasHeart : farHeart} 
            onClick={this.toggleLike}
            style={{color: this.state.liked ? 'red' : 'black'}}/>
          <FontAwesomeIcon icon={faComment} />
        </PostIconDiv>
        <PostLikesDiv>{this.state.likes} likes</PostLikesDiv>
        <CommentSection 
          comments={this.state.comments} 
          removeComment={this.removeComment}/>
        <PostDateDiv>{moment(this.state.data.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</PostDateDiv>
        <CommentForm 
          onSubmit={this.addComment}>
          <textarea 
            onChange={this.inputComment} 
            value={this.state.input} 
            placeholder='Add a comment...'></textarea>
          <PostButton 
            style={{color: this.state.input === '' ? 'rgb(196, 196, 196)' : 'rgb(56, 151, 240)'}} 
            disabled={this.state.input === ''}>Post</PostButton>
        </CommentForm>
      </PostContainerDiv>
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