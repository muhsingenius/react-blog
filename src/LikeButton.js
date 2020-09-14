import React, { Component } from 'react'
import {Button, Badge} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default class LikeButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 9
    };
    //this.handleClick = this.handleClick.bind(this);
  } 
  handleClick = () => {
    if(!this.state.liked){
      this.setState((prevState, props) =>{
        return{
          likes: prevState.likes + 1,
          liked: true
        };
      });
    }else{
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          liked: false
        };
      });
    }
    
  }
  render() {
    const label = this.state.liked ? <FontAwesomeIcon icon={faThumbsDown} /> : <FontAwesomeIcon icon={faThumbsUp} />
    return (
      <div>
        <Button onClick={this.handleClick}  variant="info">
          {label} <Badge variant="light"></Badge>{this.state.likes}
        </Button>
      </div>
    )
  }
}
