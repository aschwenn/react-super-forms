import React from 'react'
import {
  Field
} from './fields'
import { Section } from './section'

/** higher-level types used for component validation */

export interface FormButtonProps {
  /** children to be rendered inside of button */
  children?: string | React.ReactNode
  /** classname for styling the button */
  className?: string
}

export enum OverloadComponent {
  BUTTON = 'button'
}

export interface FormProps {
  /** structure of form to be rendered */
  fields: Array<Field | Section>
  /** onSubmit callback function */
  onSubmit: (data) => void
  /** call onSubmit after each change of form data and don't render action buttons */
  liveSubmit?: boolean
  /** onCancel callback function */
  onCancel: (data?) => void
  /** classname for styling the entire form */
  className?: string
  /** settings for submit button */
  submitButtonProps?: FormButtonProps
  /** settings for cancel button */
  cancelButtonProps?: FormButtonProps
  /** allow for overloading of default components with custom components */
  components?: Record<OverloadComponent, React.FC>
}
