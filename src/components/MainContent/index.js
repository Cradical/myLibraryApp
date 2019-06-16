import React from "react";
import "./mainContent.css";

import BookCard from "../BookCard";

//Declaration of variables used in component state
let books;

export default class MainContent extends React.Component {
  state = {
    books
  };

  async componentDidMount() {
    let response = await fetch("https://shelf-book.herokuapp.com/");
    let data = await response.json();

    this.setState({ books: data.books });
  }

  render() {
    console.log("state.books: ", this.state.books);
    return (
      <div className="mainContent">
        <h2 className="main-content-header">On The Shelve</h2>
        <p>Some Content will eventually go here</p>
        <BookCard books={this.state.books} />
      </div>
    );
  }
}
