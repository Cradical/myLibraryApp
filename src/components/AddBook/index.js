import React, { Component } from 'react'
import { Button, CustomInput, Form, FormGroup, Label } from 'reactstrap'

import {
  InputFields,
  SwitchFields,
} from '../../GenericComponents/Forms/formBuilder'
import { PageHeader } from '../../GenericComponents/GenericElements'
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
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSwitches = event => {
    if (event.target.value === 'on') {
      this.setState({ [event.target.name]: true })
    } else {
      this.setState({ [event.target.name]: false })
    }
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
