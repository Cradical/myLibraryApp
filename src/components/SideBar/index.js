import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import './sideBarMenu.css'

export default class SidebarMenu extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <h2 className='sidebar-header'> Sidebar Menu </h2>
        <ListGroup className='sidebar-list'>
          <ListGroupItem>
            <Link to='/bookShelf'>The Shelf</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to='/theLibrary'>The Library</Link>
          </ListGroupItem>
          <ListGroupItem>BookNotes</ListGroupItem>
          <ListGroupItem>
            <Link to='/addBook'>Add to the Library</Link>
          </ListGroupItem>
          <ListGroupItem>Other things</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
