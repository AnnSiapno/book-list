import React, { Component } from 'react'
import BookList from './BookList'
import InputForm from './InputForm'
import DATA from '../data'
import style from './style'


class InputBox extends Component {
  constructor(props){
    super(props)
    this.state = { data: [] }
  }

  render() {
    return (
      <div style={style.commentBox}>
        <h2>Books:</h2>
        <BookList data={ DATA }/>
        <InputForm />
      </div>
    )
  }
}

export default InputBox
