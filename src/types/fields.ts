/** all types of fields that can be utilized */

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  COLOR = 'color',
  DATE = 'date',
  DATETIME = 'datetime',
  TIME = 'time',
  FILE = 'file',
  NUMBER = 'number',
  RANGE = 'range',
  PHONE = 'phone',
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

export enum TextFieldType { PASSWORD = 'password', EMAIL = 'email', SEARCH = 'search', URL = 'url' }

export interface TextField extends Field {
  /** subtle placeholder value to be displayed when field is empty */
  placeholder?: string
  /** default value to be passed when rendered */
  defaultValue?: string
  /** maximum length of allowed characters */
  maxLength?: number
  /** whether to enable or disable browser autocomplete */
  autoComplete?: boolean
  /** specific type that the text represents */
  textFieldType?: TextFieldType
}

export interface TextAreaField extends Field {
  /** subtle placeholder value to be displayed when field is empty */
  placeholder?: string
  /** default value to be passed when rendered */
  defaultValue?: string
  /** maximum length of allowed characters */
  maxLength?: number
}

export interface RadioField extends Field {
  /** list of selectable items */
  items: Array<MultiOption>
  /** default value to be passed when rendered */
  defaultValue?: string | MultiOption
}

export interface CheckboxField extends Field {
  /** list of selectable items */
  items: Array<MultiOption>
  /** default value to be passed when rendered */
  defaultValue?: Array<string | MultiOption>
}

export interface SelectField extends Field {
  /** list of selectable items */
  items: Array<MultiOption>
  /** default value to be passed when rendered */
  defaultValue?: string | MultiOption
}

export interface ColorField extends Field {
  /** default value to be passed when rendered */
  defaultValue?: string
}
