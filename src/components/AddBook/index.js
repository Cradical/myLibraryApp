import React, { Component } from 'react'
import { Button, CustomInput, Form, FormGroup, Label } from 'reactstrap'

import { InputFields } from './formBuilder'
import { PageHeader } from '../../componentStash/GenericElements'
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
        <InputFields onChange={this.handleChange} />
        <Form onSubmit={this.onSubmitForm}>
          <FormGroup>
            <Label for='exampleCheckbox'>Switches</Label>
            <div>
              <CustomInput
                id='nonfiction-check'
                type='switch'
                name='nonFiction'
                label='NonFiction?'
                onChange={this.handleSwitches}
              />
              <CustomInput
                id='haveRead-check'
                type='switch'
                name='haveRead'
                label='Read it?'
                onChange={this.handleSwitches}
              />
              <CustomInput
                id='recommendable-check'
                type='switch'
                name='recommendable'
                label='Recommendable?'
                onChange={this.handleSwitches}
              />
            </div>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
