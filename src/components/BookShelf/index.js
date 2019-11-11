import React, { Fragment } from 'react'

import BookCard from '../../GenericComponents/BookCard'

import './styles.css'

const BookShelf = props => {
  const { books } = props

  let currentShelf = books.filter((book, index) => index < 3)

  return (
    <Fragment>
      <h1>Book Shelf</h1>
      <div className='bookShelf-contatiner'>
        <BookCard books={currentShelf} />
      </div>
    </Fragment>
  )
}

export default BookShelf
