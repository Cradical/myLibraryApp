import React, { Component } from 'react'
import { Button, Form } from 'reactstrap'

import {
  InputFields,
  SwitchFields,
} from '../../GenericComponents/Forms/formBuilder'
import { PageHeader } from '../../GenericComponents/GenericPageElements'
export default class AddBook extends Component {
  state = {}

  onSubmitForm = async event => {
    event.preventDefault()

    const axios = require('axios')
    let data = {
      ...this.state,
    }

    try {
      let post = await axios.post('http://localhost:8080/books', data)
      console.log(post)
    } catch (error) {
      console.error(error)
    }

    this.props.fetchBooks()
  }

  handleSwitches = event => {
    if (event.target.value === 'on') {
      this.setState({ [event.target.name]: true })
    } else {
      this.setState({ [event.target.name]: false })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <PageHeader header={this.state.pageTitle} />
        <Form onSubmit={this.onSubmitForm}>
          <InputFields onChange={this.handleChange} />
          <SwitchFields onChange={this.handleSwitches} />
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
