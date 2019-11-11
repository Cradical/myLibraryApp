import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AddBook from '../AddBook'
import { BookNotes } from '../BookNotes'
import BookShelf from '../BookShelf'
import ErrorBoundary from '../ErrorBoundary'
import TheLibrary from '../TheLibary'

import './mainContent.css'

class MainContent extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchBooks()
    }
  }

  fetchBooks = async () => {
    let response = await fetch('http://localhost:8080')
    let data = await response.json()

    this.setState({ books: data.books })
  }

  render() {
    const { history } = this.props
    return (
      <div className='mainContent'>
        <div className='content-container'>
          <ErrorBoundary>
            <Switch>
              <Route path='/addBook'>
                <AddBook fetchBooks={this.fetchBooks} />
              </Route>
              <Route exact path='/bookShelf'>
                <BookShelf books={this.state.books} />
              </Route>
              <Route path='/theLibrary'>
                <TheLibrary books={this.state.books} />
              </Route>
              <Route path='/bookNotes'>
                <BookNotes history={history} />
              </Route>
              <Redirect from='/' to='/bookShelf' />
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default withRouter(MainContent)
