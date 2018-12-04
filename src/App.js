import React, { Component } from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor'

class App extends Component {
  constructor(){
    super()

    this.state = {
      value:''
    }
  }

  handleChange = (e) => {
    this.setState({value:e.target.value})
  }


  render() {
    return (
      <MarkdownEditor handleChange={this.handleChange} value={this.state.value} />
    );
  }
}

export default App;
