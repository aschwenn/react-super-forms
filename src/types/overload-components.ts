/* eslint-disable @typescript-eslint/no-empty-interface */

/** input props for any components that can be overloaded */

import React from 'react'
import { TextFieldType } from './fields'

export enum OverloadComponent {
  BUTTON = 'button',
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  FORM_GROUP = 'formgroup',
  TEXT_FIELD = 'textfield',
  TEXTAREA_FIELD = 'textareafield',
  RADIO = 'radio',
  RADIO_GROUP = 'radiogroup',
  CHECKBOX = 'checkbox',
  CHECKBOX_GROUP = 'checkboxgroup',
  SELECT = 'select',
  SELECT_OPTION = 'selectoption',
  COLOR_PICKER = 'colorpicker'
}

export interface Button extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export interface Heading extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export interface FormGroup {
  /** text label above the input field */
  label: string
  /** id of the field the label is for */
  labelFor: string
  /** the field to be rendered */
  children: React.ReactNode
  /** whether the field is required and should denote its required status */
  required?: boolean
  /** text hint that renders below the input field */
  hint?: string
  /** identifier for required fields, defaults to (required) */
  requiredDenotation?: string
  /** classname for styling */
  className?: string
}
export interface TextInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  textFieldType?: TextFieldType
}
export interface TextAreaInput extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}
export interface Input extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface Container {
  children: Array<React.ReactNode>
}
export interface Select extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  label: string
}
export interface SelectOption extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {}

export type OverloadComponentUnion = (
  Button | Heading | FormGroup | TextInput | TextAreaInput | Input | Container | Select | SelectOption
)
