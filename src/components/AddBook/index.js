import React, { Component } from 'react'
import { Button, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap'

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
          <FormGroup>
            <Label htmlFor='author-name'>Author</Label>
            <Input
              type='text'
              name='author'
              placeholder="Enter the Author's name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='book-summary'>Book Title</Label>
            <Input
              type='text'
              name='title'
              placeholder='What is the title?'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='book-summary'>Book Subtitle</Label>
            <Input
              type='text'
              name='subtitle'
              placeholder='and the subtitle?'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='book-summary'>Book Summary</Label>
            <Input
              type='text'
              name='bookSummary'
              placeholder='Enter a short summary'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='publish-year'>Year</Label>
            <Input
              type='text'
              name='year'
              placeholder='e.g. 1999'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='book-summary'>Genre</Label>
            <Input
              type='text'
              name='genre'
              placeholder='What is the genre'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='cover-url'>Paste in the url of a cover image</Label>
            <Input
              type='url'
              name='imageLink'
              placeholder='https://example.com'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='language'>language</Label>
            <Input
              type='text'
              name='language'
              placeholder='e.g. English'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
