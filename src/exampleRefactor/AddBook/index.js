import React, { Component } from 'react'
import { Button, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap'

import { PageHeader } from '../../componentStash/GenericElements'

export default class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      bookSummary: '',
      nonFiction: false,
      genre: '',
      haveRead: false,
      imageLink: '',
      language: '',
      link: '',
      pages: 0,
      recommendable: false,
      subtitle: '',
      title: '',
      year: 0,
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleBookSummaryChange = this.handleBookSummaryChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onSubmitForm(event) {
    event.preventDefault()

    fetch('http://localhost:8080/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: this.state.author,
        bookSummary: this.state.bookSummary,
        nonFiction: this.state.nonFiction,
        genre: this.state.genre,
        haveRead: this.state.haveRead,
        imageLink: this.state.imageLink,
        language: this.state.language,
        link: this.state.link,
        pages: this.state.pages,
        recommendable: this.state.recommendable,
        subtitle: this.state.subtitle,
        title: this.state.title,
        year: this.state.year,
      }),
    }).then(response => console.log(response))

    this.setState({
      author: '',
      bookSummary: '',
      nonFiction: false,
      genre: '',
      haveRead: false,
      imageLink: '',
      language: '',
      link: '',
      pages: 0,
      recommendable: false,
      subtitle: '',
      title: '',
      year: 0,
    })
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value,
    })
  }

  handleBookSummaryChange() {
    this.setState({
      bookSummary: event.target.value,
    })
  }

  handleTitleChange() {
    this.setState({
      title: event.target.value,
    })
  }

  handleSubtitleChange() {
    this.setState({
      subtitle: event.target.value,
    })
  }

  handleYearChange() {
    this.setState({
      year: event.target.value,
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
              onChange={this.handleAuthorChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='book-summary'>Book Title</Label>
            <Input
              type='text'
              name='title'
              placeholder='What is the title?'
              onChange={this.handleTitleChange}
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
              onChange={this.handleBookSummaryChange}
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
