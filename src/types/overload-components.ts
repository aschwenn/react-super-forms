/* eslint-disable @typescript-eslint/no-empty-interface */

/** input props for any components that can be overloaded */

import React from 'react'

export enum OverloadComponent {
  BUTTON = 'button',
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  FORMGROUP = 'formgroup',
  TEXTFIELD = 'textfield',
  TEXTAREAFIELD = 'textareafield'
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
  password?: boolean
}
export interface TextAreaInput extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export type OverloadComponentUnion = Button | Heading | FormGroup | TextInput | TextAreaInput
