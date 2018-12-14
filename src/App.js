import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import MarkdownEditor from './components/MarkdownEditor'

import './App.css';
import 'highlight.js/styles/dracula.css'

marked.setOptions({
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {
  constructor(){
    super()

    this.state = {
      value:'',
      saving:false
    }
  }

  componentDidMount(){
    const value = localStorage.getItem('md')
    this.setState({value})
  }

  componentDidUpdate(){
    clearInterval(this.timer)
    this.timer = setTimeout(() => {
      this.handleSave(this.state.value)
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  handleChange = (e) => {
    this.setState({value:e.target.value, saving:true})
  }

  handleSave = (value) => {
    localStorage.setItem('md',value)
    this.setState({saving:false})
  }

  getMarkup = () => {
    return {__html:marked(this.state.value)}
  }

  render() {
    return (
      <MarkdownEditor 
        handleChange={this.handleChange}
        saving={this.state.saving}
        value={this.state.value} 
        getMarkup={this.getMarkup}
      />
    );
  }
}

export default App;
