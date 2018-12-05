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

  getMarkup = () => {
    return {__html:this.state.value}
  }

  render() {
    return (
      <MarkdownEditor 
        handleChange={this.handleChange} 
        value={this.state.value} 
        getMarkup={this.getMarkup}
      />
    );
  }
}

export default App;
