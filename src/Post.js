import React from 'react'
import { Card, Badge, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
//import LikeButton from './LikeButton'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const blogStyle = {
  width: '50%',
  margin: '0 auto',
  marginTop: '20px'
};


export default function Post({ post, handleUp, handleDown }) {

  function handleUpVoteClick(){
    handleUp(post.id)
  }
  function handleDownVoteClick(){
    handleDown(post.id)
  }

  return (
    <div style={blogStyle}>
      
      <Card>
        <Card.Header><p> <FontAwesomeIcon icon={faUser} /> {post.author} || <small>{post.date}</small></p></Card.Header>
        <Card.Body>
          <Card.Text>
            <h3>{post.title}</h3>
            {post.content}
          </Card.Text>
          {/* <LikeButton upVotes={post.upVotes} downVotes={post.downVotes} /> */}
          <Button onClick={handleUpVoteClick}>
            <Badge><FontAwesomeIcon icon={faThumbsUp} /> { post.upVotes} </Badge> 
          </Button>
          <Button onClick={handleDownVoteClick}>
            <Badge><FontAwesomeIcon icon={faThumbsDown} /> {post.downVotes}</Badge> 
          </Button>
          
        </Card.Body>
      </Card>
    </div>
  )
}

