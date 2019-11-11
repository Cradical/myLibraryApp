import React from 'react'

export const PageHeader = props => {
  return (
    <h2 className='main-content-header'>
      {props.header ? props.header : 'Book Shelf'}
    </h2>
  )
}
