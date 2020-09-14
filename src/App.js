import React, { useState, useRef, useEffect } from 'react';
import BlogPosts from './BlogPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import uuid from 'react-uuid'

const formStyle = {
  width: '50%',
  margin: '0 auto',
};

function App() {

  const [posts, setPosts] = useState([])
  const postTitleRef = useRef()
  const postContentRef = useRef()

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogApp.posts'))
    if(storedPosts) setPosts(storedPosts)
  }, [])

  useEffect(() => {
    localStorage.setItem('blogApp.posts', JSON.stringify(posts))
  }, [posts])

  function handleAddPost(e){
    const title = postTitleRef.current.value
    const content = postContentRef.current.value
    setPosts(prevPosts => {
      return [...prevPosts, {id:uuid(), title: title, content:content, date: Date(), author:'Muhsin'}]
    })

  }

  return (
    <div>
      <NavBar />
      <form style={formStyle}>
          <h3>Add Post</h3>
              <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" ref={postTitleRef} />
              </div>
              <div className="form-group">
                  <label>Post Contnet</label>
                  <textarea className="form-control" col="10" rows="5" ref={postContentRef}></textarea>
              </div>
              <button className="btn btn-primary" onClick={handleAddPost}>Submit</button>
          </form>
      <BlogPosts posts={posts} />
      
    </div>
  )
  
}

export default App;
