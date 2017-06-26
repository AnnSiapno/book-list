import React, { Component } from 'react'
import style from './style'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = { author: '', text: '' }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(`${this.state.text} - ${this.state.author}`)
  }

  render() {
    return(
      <form style={ style.bookForm } onSubmit={ this.handleSubmit }>
        <input
          type=’text’
          placeholder=’Input The Author’
          style={ style.inputFormAuthor}
          value={ this.state.author }
          onChange={ this.handleAuthorChange } />
        <input
          type=’text’
          placeholder=’Input the Book Title’
          style={ style.inputFormText}
          value={ this.state.text }
          onChange={ this.handleTextChange } />
        <input
          type=’submit’
          style={ style.inputFormPost }
          value=’Post’ />
      </form>
    )
  }
}

export default InputForm
