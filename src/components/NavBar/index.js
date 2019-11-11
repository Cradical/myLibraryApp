import React, { Fragment } from 'react'
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export default class NavbarHeader extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Fragment>
        <Navbar className='navbar' color='primary' light expand='md'>
          <NavbarBrand className='text-white' href='/'>
            Shelf-Book
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='text-white' href='/bookShelf/'>
                  Book Shelf
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className='text-white'
                  href='https://github.com/Cradical'
                  target='_blank'
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}
