import React from 'react';
import './newstyle.css';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { ErrorComponent } from '../ErrorComponent/ErrorComponent.jsx';



const validationSchema= Yup.object({
  name: Yup.string().required("Yup Name Required"),
  email: Yup.string().email("Yup Invalid Email Format").required("Yup Email Required"),
  channel: Yup.string().required("Yup Channel Required"),
  comments: Yup.string().required("Yup Comments Required"),
  address: Yup.string().required("Yup Address Required"),
  social: Yup.object({
    facebook:  Yup.string().required("Yup facebook Required"),
    twitter:  Yup.string().required("Yup twitter Required")
  })
})

const initialValues = {
    name:"",
    email:"",
    channel:"",
    comments:"",
    address:"",
    social:{
        facebook:"",
        twitter:""
    }
  }

  const onSubmit = (myvalues)=>{
    console.log("form data ", myvalues)
  }


export const NewYoutubeForm = () => {
 

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
    
        <Form >
            <p>New Youtube Form</p>

            <div className='inputlabelWrapper'>
                <label htmlFor='name' >Name</label>
                <Field 
                 type="text" 
                 id="name" 
                 name="name"  />

                <ErrorMessage name='name' component={ErrorComponent} /> 
            </div>
           
             <div className='inputlabelWrapper'>
                <label htmlFor='email' >Email</label>
                <Field 
                    type="email" 
                    id="email" 
                    name="email" />

                <ErrorMessage name='email' component={ErrorComponent} />
             </div>
            

            <div className='inputlabelWrapper'>
                <label htmlFor='channel' >Channel</label>
                <Field 
                    type="text" 
                    id="channel" 
                    name="channel" />

                <ErrorMessage name='channel'>
                  {
                    (erroritem)=> <div className='rederror'>{erroritem}</div>
                  }  
                </ErrorMessage>
            </div>
            <div className='inputlabelWrapper'>
                <label htmlFor='comments' >Comments</label>
                <Field 
                as="textarea"
                    type="text" 
                    id="comments" 
                    name="comments" />

                <ErrorMessage name='comments' />
            </div>

            <div className='inputlabelWrapper'>
                <label htmlFor='address' >Address</label>
                <Field name="address" > 
                {
                    (props)=>{
                        const {field, form, meta}=props;

                        return (
                            <div>
                                <input type="text" id="address" {...field} />
                                {meta.touched && meta.error ?
                                <div className='rederror'>{meta.error}</div> : null}
                            </div>
                        )
                    }
                }
                </Field>

                
            </div>

            <div className='inputlabelWrapper'>
                <label htmlFor='facebook' >Facebook</label>
                <Field 
                    type="text" 
                    id="facebook" 
                    name="social.facebook" />

                <ErrorMessage name='social.facebook' component={ErrorComponent} />
            </div>

            <div className='inputlabelWrapper'>
                <label htmlFor='twitter' >Twitter</label>
                <Field 
                    type="text" 
                    id="twitter" 
                    name="social.twitter" />

                <ErrorMessage name='social.twitter' component={ErrorComponent} />
            </div>

            

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}





/*
 validate: values=>{
    let errors={};
    if(!values.name){
      errors.name="Name Required"
    }


    if(!values.email){
      errors.email="Email Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email="Invalid Email Format"
    }


    if(!values.channel){
      errors.channel="Channel Required"
    }

    return errors
  }
*/

// {... formik.getFieldProps("channel")} 