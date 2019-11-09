import React, { Fragment } from 'react'

import BookCard from '../../componentStash/BookCard'

import './styles.css'

const TheLibrary = props => {
  const { books } = props

  return (
    <Fragment>
      <BookCard books={books} />
    </Fragment>
  )
}

export default TheLibrary
