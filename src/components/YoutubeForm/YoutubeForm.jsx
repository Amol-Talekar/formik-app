import React from 'react';
import './style.css';
import { useFormik } from 'formik';
import * as Yup from "yup"


const validationSchema= Yup.object({
  name: Yup.string().required("Yup Name Required"),
  email: Yup.string().email("Yup Invalid Email Format").required("Yup Email Required"),
  channel: Yup.string().required("Yup Channel Required")
})


export const YoutubeForm = () => {
 const formik= useFormik({
  initialValues:{
    name:"",
    email:"",
    channel:""
  },
  onSubmit:myvalues=>{
    console.log("form data ", myvalues)
  },
  validationSchema: validationSchema
 }
 );


  return (
    <div >
       <p>Old Youtube Form</p>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.name} />
              {formik.touched.name && formik.errors.name? <h5>{formik.errors.name}</h5>:null}

            <label htmlFor='email' >Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.email} />
              {formik.touched.email && formik.errors.email? <h5>{formik.errors.email}</h5>:null}

            <label htmlFor='channel' >Channel</label>
            <input 
              type="text" 
              id="channel" 
              name="channel" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.channel} />
              {formik.touched.channel && formik.errors.channel? <h5>{formik.errors.channel}</h5>:null}

            <button type='submit'>Submit</button>
        </form>
    </div>
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