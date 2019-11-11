import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AddBook from '../AddBook'
import BookModal from '../../GenericComponents/Modal'
import { BookNotes } from '../BookNotes'
import BookShelf from '../BookShelf'
import ErrorBoundary from '../ErrorBoundary'
import TheLibrary from '../TheLibary'

import './mainContent.css'
import { Module } from 'module'

export default class MainContent extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  componentDidUpdate(prevProps) {}

  fetchBooks = async () => {
    let response = await fetch('http://localhost:8080')
    let data = await response.json()

    this.setState({ books: data.books })
  }

  render() {
    return (
      <div className='mainContent'>
        <div className='content-container'>
          <ErrorBoundary>
            <Switch>
              <Route path='/addBook'>
                <AddBook />
              </Route>
              <Route exact path='/bookShelf'>
                <BookShelf books={this.state.books} />
              </Route>
              <Route path='/theLibrary'>
                <TheLibrary books={this.state.books} />
              </Route>
              <Route path='/bookNotes'>
                <BookNotes />
              </Route>
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}
