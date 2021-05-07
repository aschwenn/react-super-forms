/** all types of fields that can be utilized */

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SECTION = 'section'
}

/** field configuration data interfaces */

export interface MultiOption {
  label: string
  /** unique id */
  value: string | number | boolean
}

export interface Field {
  /** type of field to be rendered */
  type: FieldType
  /** unique identifier for rendered input */
  id: string
  /** label to be rendered above input field */
  label: string
  /** if field is required, defaults to false */
  required?: boolean
  /** optional validator function to override default validator */
  validator?: (data) => boolean
  /** field is disabled and immutable */
  disabled?: boolean
  /** small text to be rendered below the input field */
  hint?: string
  /** classname for css styling */
  className?: string
  /** autofocus on input when page loads */
  autoFocus?: boolean
}

/** individual field definitions */

export interface TextField extends Field {
  /** subtle placeholder value to be displayed when field is empty */
  placeholder?: string
  /** default value to be passed when rendered */
  defaultValue?: string
  /** maximum length of allowed characters */
  maxLength?: number
}

export interface TextAreaField extends Field {
  /** subtle placeholder value to be displayed when field is empty */
  placeholder?: string
  /** default value to be passed when rendered */
  defaultValue?: string
  /** maximum length of allowed characters */
  maxLength?: number
}
