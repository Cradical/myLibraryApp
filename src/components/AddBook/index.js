import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import { PageHeader } from '../../componentStash/GenericElements'
export default class AddBook extends Component {
  state = {
    pageTitle: 'Add A Book',
  }

  render() {
    return (
      <div>
        <PageHeader header={this.state.pageTitle} />
        <Form>
          <FormGroup>
            <Label for='author-name'>Author</Label>
            <Input
              type='text'
              name='author-name'
              placeholder="Enter the Author's name"
            />
          </FormGroup>
          <FormGroup>
            <Label for='book-summary'>Book Summary</Label>
            <Input
              type='text'
              name='book-summary'
              placeholder='Enter a short summary'
            />
          </FormGroup>
          <FormGroup>
            <Label for='cover-url'>Paste in the url of a cover image</Label>
            <Input type='url' name='url' placeholder='https://example.com' />
          </FormGroup>
          <FormGroup tag='fieldset'>
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio1' /> Option one is this and
                that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio1' /> Option two can be something
                else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type='radio' name='radio1' disabled /> Option three is
                disabled
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' /> Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
