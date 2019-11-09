import React, { Component } from 'react'

import { PageHeader } from '../../componentStash/GenericElements'
export default class AddBook extends Component {
  state = {
    pageTitle: 'Add A Book',
  }

  render() {
    return (
      <div>
        <PageHeader header={this.state.pageTitle} />
        <h3>Adding a book form</h3>
      </div>
    )
  }
}
