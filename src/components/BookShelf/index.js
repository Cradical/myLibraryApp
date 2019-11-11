import React, { Fragment } from 'react'

import BookCard from '../../GenericComponents/BookCard'
import { PageHeader } from '../../GenericComponents/GenericPageElements'

import './styles.css'

const BookShelf = props => {
  const { books, renderModal } = props
  console.log(renderModal)

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
