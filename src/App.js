import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogPosts from './BlogPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import uuid from 'react-uuid'
import UserSignup from './UserSignup';

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

  function handleUpVote(id){
    const newPost= [...posts]
    const post = newPost.find(post => post.id === id)
    post.upVotes = post.upVotes + 1
    setPosts(newPost)
  }

  function handleDownVote(id){
    const newPost= [...posts]
    const post = newPost.find(post => post.id === id)
    post.downVotes = post.downVotes + 1
    setPosts(newPost)
  }

  function handleDelete(id){
    const newPost= [...posts.filter(post => post.id !== id)]
    setPosts(newPost)
  }
  
  function handleAddPost(e){
    const title = postTitleRef.current.value
    const content = postContentRef.current.value
    setPosts(prevPosts => {
      return [...prevPosts, {id:uuid(), title: title, content:content, date: Date().toString(), author:'Default', upVotes:0, downVotes:0}]
    })

  }

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={props => (
          <React.Fragment>
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
            <h2 style={{textAlign: 'center'}}>Blog Posts</h2>
            <BlogPosts posts={posts} handleUp = {handleUpVote} handleDown = {handleDownVote} deletePost = {handleDelete} />
        
          </React.Fragment>
        )} />
        <Route path="/login" component={UserLogin} />
        <Route path="/signup" component={UserSignup} />
      </div>
    </Router>
    
  )
  
}

export default App;
