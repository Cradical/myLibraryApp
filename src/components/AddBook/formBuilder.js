import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import { FORM_FIELDS } from './addBookFormData'

export const InputFields = props => {
  return FORM_FIELDS.map((field, index) => {
    let key = Object.keys(field).join('')
    let formData = field[key]

    return (
      <FormGroup key={index}>
        <Label htmlFor={formData.label.htmlFor || ''}>
          {formData.label.innerText}
        </Label>
        <Input
          type={formData.input.text || 'text'}
          name={formData.input.name || ''}
          placeholder={formData.input.placeholder || ''}
          onChange={props.onChange}
        />
      </FormGroup>
    )
  })
}
