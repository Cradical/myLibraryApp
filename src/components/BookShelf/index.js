import React, { Fragment } from 'react'

import BookCard from '../../componentStash/BookCard'

const BookShelf = props => {
  const { books } = props

  let currentShelf = books.filter((book, index) => index < 3)

  return (
    <Fragment>
      <BookCard books={currentShelf} />
    </Fragment>
  )
}

export default BookShelf
