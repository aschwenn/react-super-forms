import { FieldType, Field } from './fields'

/** field section wrapper interfaces */

export enum Orientation { Row = 'row', Column = 'column' }

export interface Section {
  /** type must be SECTION to be interpreted as a Section object */
  type: FieldType
  /** optional title to render at top of section */
  title?: string
  /** optional subtitle to render at top of section below title */
  subtitle?: string
  titleClassName?: string
  subtitleClassName?: string
  /** orientation of children, defaults to row */
  orientation?: Orientation
  /** child fields to render inside of section */
  children: Array<Field | Section>
  /** classname for styling of entire section */
  className?: string
}
