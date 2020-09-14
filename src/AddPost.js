import React, { Component } from 'react'
//import {Form, Button, Row, Col} from 'react-bootstrap'

const formStyle = {
  width: '50%',
  margin: '0 auto',
};

export default class AddPost extends Component {

  postData;

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: ''
        }
    }

    // Form Events
    onChangeTitle(e) {
      this.setState({ title: e.target.value })
  }

  onChangeContent(e) {
      this.setState({ content: e.target.value })
  }

  onSubmit(e) {
      e.preventDefault()

      this.setState({
          title: '',
          content: ''
      })
  }

   // React Life Cycle
   componentDidMount() {
    this.postData = JSON.parse(localStorage.getItem('post'));

    if (localStorage.getItem('post')) {
        this.setState({
            title: this.postData.title,
            content: this.postData.content
        })
    } else {
        this.setState({
            title: '',
            content: ''
        })
    }
}

componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('post', JSON.stringify(nextState));
}

  render() {
    return (
      <div>
          
        
      </div>
    )
  }
}
