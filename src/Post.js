import React from 'react'
import { Card, Badge, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTimes} from '@fortawesome/free-solid-svg-icons'
//import LikeButton from './LikeButton'
import { faThumbsUp, faThumbsDown, faEdit } from '@fortawesome/free-solid-svg-icons'

const blogStyle = {
  width: '50%',
  margin: '0 auto',
  marginTop: '20px'
};

const editButton = {
  marginLeft: '10px',
  backgroundColor: 'inherit',
  border: 'none',
  pull: 'right'
};

const voteButtons = {
  marginLeft: '10px', backgroundColor: 'inherit', color: 'black', border: 'none'
};


export default function Post({ post, handleUp, handleDown, deletePost }) {

  function handleUpVoteClick(){
    handleUp(post.id)
  }
  function handleDownVoteClick(){
    handleDown(post.id)
  }

  function handlePostDelete(){
    deletePost(post.id)
  }

  return (
    <div style={blogStyle}>
      
      <Card>
        <Card.Header>
          <p> 
            <FontAwesomeIcon icon={faUser} /> {post.author} || {post.date}
            <Button style={editButton} >
              <FontAwesomeIcon icon={faEdit} size="sm" color="blue"/>
            </Button> 
            <Button style={editButton} onClick={handlePostDelete}>
              <FontAwesomeIcon icon={faTimes} size="sm" color="red"/>
            </Button> 
            
           </p> 
          
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h3>{post.title}</h3>
            {post.content}
          </Card.Text>
          {/* <LikeButton upVotes={post.upVotes} downVotes={post.downVotes} /> */}
          <Button onClick={handleUpVoteClick} style={voteButtons}>
            <FontAwesomeIcon icon={faThumbsUp} /> <Badge>{ post.upVotes} </Badge> 
          </Button>
          <Button onClick={handleDownVoteClick} style={voteButtons}>
            <FontAwesomeIcon icon={faThumbsDown} color="red" /> <Badge>{post.downVotes}</Badge> 
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

