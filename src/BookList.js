import React, { Component } from 'react'
import Book from './Book'
import style from './style'

class BookList extends Component {
  render() {
    let bookNodes = this.props.data.map(book => {
      return (
        <Book author={ book.author } key={ book.id }>
        { book.text }
        </Book>
      )
    })

    return (
      <div style={ style.bookList }>
      { bookNodes }
      </div>
    )
  }
}

export default BookList
