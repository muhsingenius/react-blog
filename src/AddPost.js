import React from 'react'

export default function AddPost() {
  const postTitleRef = useRef()
  const postContentRef = useRef()
  return (
    <div>
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
    </div>
  )
}

const formStyle = {
  width: '50%',
  margin: '0 auto',
};
