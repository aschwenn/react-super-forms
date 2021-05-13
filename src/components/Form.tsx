import React, { useEffect, useState } from 'react'

import {
  Field,
  FieldType,
  FormProps, MultiOption, Orientation, OverloadComponent, OverloadComponentUnion, RadioField, Section, TextAreaField, TextField
} from '../types'
import { ButtonContainer, SectionChildrenWrapper, SectionChildWrapper, SectionWrapper, StyledForm } from './styled'
import * as DefaultComponents from './defaults'
import { flatten, initializeData, removeExtraProps } from './functions'

const Form = ({
  fields,
  onSubmit,
  liveSubmit,
  onCancel,
  className,
  submitButtonProps,
  cancelButtonProps,
  components: overloadComponents,
  requiredDenotation
}: FormProps): React.ReactElement => {
  const [data, setData] = useState<Record<string, string | number | boolean | MultiOption>>({})
  const [valid, setValid] = useState<boolean>(false)
  const [flattenedFields, setFlattenedFields] = useState<Array<Field>>([])
  /** hashmap of overloadable components to be used in form */
  const [components, setComponents] = useState<Record<OverloadComponent, React.FC<OverloadComponentUnion>>>()

  /** override default components */
  useEffect(() => {
    const tmp: Record<OverloadComponent | string, React.FC<OverloadComponentUnion>> = {}
    Object.keys(OverloadComponent).forEach((key) => {
      const c = OverloadComponent[key]
      if (overloadComponents && c in overloadComponents) tmp[c] = overloadComponents[c]
      else tmp[c] = DefaultComponents[c]
    })
    setComponents(tmp)
  }, [overloadComponents])

  /** initialize data */
  useEffect(() => {
    if (!Object.keys(data).length) {
      const tmp = flatten(fields)
      setFlattenedFields(tmp)
      setData(initializeData(tmp))
    }
  }, [fields])

  if (!fields || !components) return null

  const renderInput = (field: Field): React.ReactElement => {
    switch (field.type) {
    case FieldType.TEXT: {
      const {
        id,
        placeholder,
        ...tmp
      } = field as TextField
      const fieldProps = removeExtraProps(tmp as TextField)
      return (
        <components.textfield
          id={id}
          name={id}
          value={data[id] as string | number}
          onChange={(e) => {
            const tmp = e.target.value
            setData((prev) => ({ ...prev, [id]: tmp }))
          }}
          placeholder={placeholder || 'Enter some text...'}
          {...fieldProps}
        />
      )
    }
    case FieldType.TEXTAREA: {
      const {
        id,
        placeholder,
        ...tmp
      } = field as TextAreaField
      const fieldProps = removeExtraProps(tmp as TextAreaField)
      return (
        <components.textareafield
          id={id}
          name={id}
          value={data[id] as string | number}
          onChange={(e) => {
            const tmp = e.target.value
            setData((prev) => ({ ...prev, [id]: tmp }))
          }}
          placeholder={placeholder || 'Enter some text...'}
          {...fieldProps}
        />
      )
    }
    case FieldType.RADIO: {
      const {
        id,
        items
      } = field as RadioField
      return (
        <components.radiogroup>
          {
            (items || []).map((item, i) => (
              <components.radio
                id={item.value.toString()}
                key={i}
                label={item.label}
                name={id}
                onChange={() => setData((prev) => ({ ...prev, [id]: item.value }))}
                checked={data[id] === item.value}
              />
            ))
          }
        </components.radiogroup>
      )
    }
    }
  }
  console.log(data)

  const renderField = (field: Field | Section, index: number, depth = 0): React.ReactElement => {
    if (field.type === FieldType.SECTION) {
      field = field as Section
      return (
        <SectionWrapper className={field.className} key={index}>
          {
            field.title && (
              <components.title className={field.titleClassName}>
                {field.title}
              </components.title>
            )
          }
          {
            field.subtitle && (
              <components.subtitle className={field.subtitleClassName}>
                {field.subtitle}
              </components.subtitle>
            )
          }
          {
            field.children && (
              <SectionChildrenWrapper orientation={field.orientation} paddingTop={field.title || field.subtitle}>
                {
                  field.children.map((child, i, { length }) => (
                    <SectionChildWrapper
                      orientation={(field as Section).orientation || Orientation.Column}
                      first={i === 0}
                      last={i === length - 1}
                      key={i}
                    >
                      { renderField(child, index, depth + 1) }
                    </SectionChildWrapper>
                  ))
                }
              </SectionChildrenWrapper>
            )
          }
        </SectionWrapper>
      )
    } else {
      field = field as Field
      return (
        <components.formgroup
          label={field.label}
          labelFor={field.id}
          requiredDenotation={requiredDenotation}
          hint={field.hint}
          required={field.required}
          className={field.className}
          key={field.id}
        >
          { renderInput(field) }
        </components.formgroup>
      )
    }
  }

  return (
    <StyledForm
      className={className}
      onSubmit={(e) => {
        /** prevent submitting before validating */
        e.preventDefault()
        if (valid) onSubmit(data)
      }}
    >
      { fields.map((field, i) => renderField(field, i)) }
      {
        !liveSubmit && (
          <ButtonContainer>
            {
              onCancel && (
                <components.button
                  className={cancelButtonProps?.className}
                  style={{ marginRight: '0.5rem' }}
                >
                  {cancelButtonProps?.children || 'Cancel'}
                </components.button>
              )
            }
            <components.button
              className={submitButtonProps?.className}
              disabled={!valid}
            >
              {submitButtonProps?.children || 'Submit'}
            </components.button>
          </ButtonContainer>
        )
      }
    </StyledForm>
  )
}

export default Form
