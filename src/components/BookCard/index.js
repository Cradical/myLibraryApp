import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import "./bookCard.css";

const BookCard = props => {
  const { books } = props;

  if (!props.books) {
    console.log("no books");
    return null;
  }

  const bookCard = books.map(book => {
    return (
      <Card className="book-card" key={book.id}>
        <CardImg
          top
          width="100%"
          src={book.imageLink}
          alt={`book cover of ${book.title}`}
        />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.subtitle}</CardSubtitle>
          <CardText>{book.bookSummary}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  });

  return <Fragment>{bookCard}</Fragment>;
};

export default BookCard;
