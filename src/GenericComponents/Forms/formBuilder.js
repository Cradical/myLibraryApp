import React from 'react'
import { CustomInput, FormGroup, Label, Input } from 'reactstrap'

import {
  FORM_FIELD_INPUTS,
  FORM_FIELD_SWITHCHES,
} from '../../components/AddBook/addBookFormData'

export const InputFields = props => {
  return FORM_FIELD_INPUTS.map((field, index) => {
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

export const SwitchFields = props => {
  return FORM_FIELD_SWITHCHES.map((field, index) => {
    let key = Object.keys(field).join('')
    let formData = field[key]

    return (
      <FormGroup key={index}>
        <CustomInput
          id={formData.input.id}
          type={formData.input.type || 'switch'}
          name={formData.input.name || ''}
          label={formData.input.label}
          onChange={props.onChange}
        />
      </FormGroup>
    )
  })
}
