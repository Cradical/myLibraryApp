import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import './sideBarMenu.css'

export default class SidebarMenu extends React.Component {
  handleClick(event) {
    // change route to appropriate component
    console.log('clicked: ')
  }

  render() {
    return (
      <div className='sidebar'>
        <h2 className='sidebar-header'> Sidebar Menu </h2>
        <ListGroup className='sidebar-list'>
          <ListGroupItem onClick={this.handleClick}> The Shelf </ListGroupItem>
          <ListGroupItem onClick={this.handleClick}>The Library</ListGroupItem>
          <ListGroupItem onClick={this.handleClick}>BookNotes</ListGroupItem>
          <ListGroupItem onClick={this.handleClick}>
            Add to the Library
          </ListGroupItem>
          <ListGroupItem onClick={this.handleClick}>Other things</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
