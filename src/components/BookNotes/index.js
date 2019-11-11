import React from 'react'
import { useLocation } from 'react-router-dom'

export const BookNotes = () => {
  let location = useLocation()
  let book = location.state
  console.log(book)

  return (
    <div>
      <h1>Information about:</h1>
      <img src={book.imageLink} />
      <h3>{book.title}</h3>
      <h3>{book.subtitle}</h3>
      <h5>By {book.author}</h5>
      <p>{book.bookSummary}</p>
      <a href={book.link} target='_blank'>
        Visit the book's site
      </a>
    </div>
  )
}
