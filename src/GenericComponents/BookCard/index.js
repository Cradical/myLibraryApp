import React, { Fragment } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'

import './bookCard.css'

const BookCard = props => {
  const { books } = props

  const bookCard = books.map(book => {
    let location = {
      pathname: `bookNotes/${book.id}`,
      state: book,
    }

    return (
      <Card className='book-card' key={book.id}>
        <CardImg
          top
          width='100%'
          src={book.imageLink}
          alt={`Book cover of ${book.title}`}
        />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.subtitle}</CardSubtitle>
          <CardText>{book.bookSummary}</CardText>
          <Button color='primary'>
            <Link className='card-link' to={location}>
              View Book
            </Link>
          </Button>
        </CardBody>
      </Card>
    )
  })

  return <Fragment>{bookCard}</Fragment>
}

export default BookCard
