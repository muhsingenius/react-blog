import React from 'react'
import Post from './Post'


export default function BlogPosts({ posts, handleUp, handleDown }) {
  return (
    
    posts.map(post =>{
      
      return <Post key={post.id} post={post} handleUp = {handleUp} handleDown = {handleDown} />
    })
  )
}
