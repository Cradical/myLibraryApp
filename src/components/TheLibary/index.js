import React, { Fragment } from 'react'

import BookCard from '../../componentStash/BookCard'

const TheLibrary = props => {
  const { books } = props

  return (
    <Fragment>
      <BookCard books={books} />
    </Fragment>
  )
}

export default TheLibrary
