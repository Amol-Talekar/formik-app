import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer () {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Indian', value: 'Indian' },
    { key: 'NRI', value: 'NRI' },
    { key: 'Dual Citizenship', value: 'Dual_Citizenship' }
  ]
  const Genders = [
    { key: 'Man', value: 'Man' },
    { key: 'Woman', value: 'Woman' },
    { key: 'Other', value: 'Other' }
  ]
  const Documents = [
    { key: 'Aadhar', value: 'Aadhar' },
    { key: 'PAN', value: 'PAN' },
    { key: 'Passport', value: 'Passport' }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable()
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
          />
          <FormikControl
            control='select'
            label='Select Citizenship Type'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            label='Gender'
            name='radioOption'
            options={Genders}
          />
          <FormikControl
            control='checkbox'
            label='Documents'
            name='checkboxOption'
            options={Documents}
          />
          <FormikControl
            control='date'
            label='Birthdate'
            name='birthDate'
          />

           <FormikControl
            control='materialui'
            label='MaterailUi'
            name='materailUi'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
