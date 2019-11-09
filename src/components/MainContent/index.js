import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BookShelf from '../BookShelf'
import ErrorBoundary from '../ErrorBoundary'
import TheLibrary from '../TheLibary'

import './mainContent.css'

export default class MainContent extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    let response = await fetch('http://localhost:8080')
    let data = await response.json()

    this.setState({ books: data.books })
  }

  render() {
    return (
      <div className='mainContent'>
        <h2 className='main-content-header'>On The Shelve</h2>
        <div className='book-card-container'>
          <ErrorBoundary>
            <Switch>
              <Route exact path='/bookShelf'>
                <BookShelf books={this.state.books} />
              </Route>
              <Route path='/theLibrary'>
                <TheLibrary books={this.state.books} />
              </Route>
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}
