import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'

import './styles.css'

export const BookNotes = () => {
  let location = useLocation()
  let book = location.state
  console.log(book)

  return (
    <div className='book-notes-container'>
      <h1>Information about:</h1>
      <img src={book.imageLink} />
      <h3>{book.title}</h3>
      <h3>{book.subtitle}</h3>
      <h5>By {book.author}</h5>
      <p>{book.bookSummary}</p>
      <div className='action-btns'>
        <Button color='info'>Update This Book</Button>
        <Button onClick={() => handleDelete(book.id)} color='danger'>
          Delete This Book
        </Button>
        <a href={book.link} target='_blank'>
          <Button color='primary'>Visit the website</Button>
        </a>
      </div>
    </div>
  )
}

const handleDelete = async id => {
  console.log(id)

  await axios
    .delete(`http://localhost:8080/books/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const axios = require('axios')
