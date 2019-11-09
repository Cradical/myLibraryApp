import React, { Fragment } from 'react'

import BookCard from '../../componentStash/BookCard'
import { PageHeader } from '../../componentStash/GenericElements'

import './styles.css'

const BookShelf = props => {
  const { books } = props

  let currentShelf = books.filter((book, index) => index < 3)

  return (
    <Fragment>
      <PageHeader />
      <div className='bookShelf-contatiner'>
        <BookCard books={currentShelf} />
      </div>
    </Fragment>
  )
}

export default BookShelf
