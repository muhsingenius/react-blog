import React from 'react'
import { Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import LikeButton from './LikeButton'

const blogStyle = {
  width: '50%',
  margin: '0 auto',
  marginTop: '20px'
};


export default function Post({ post }) {
  return (
    <div style={blogStyle}>
      
      <Card>
        <Card.Header><p> <FontAwesomeIcon icon={faUser} /> {post.author} || <small>{post.date}</small></p></Card.Header>
        <Card.Body>
          <Card.Text>
            <h3>{post.title}</h3>
            {post.content}
          </Card.Text>
          <LikeButton />
          
        </Card.Body>
      </Card>
    </div>
  )
}

