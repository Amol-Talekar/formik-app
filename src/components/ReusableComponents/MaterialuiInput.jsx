import React from 'react';
import { Field} from 'formik';
import { FormControl,InputLabel, TextField, Input,Typography , FormControlLabel} from '@mui/material';

export const MaterialuiInput = (props) => {
    const {label, name, ...rest}=props;

    //disabled={form.errors[name] && form.touched[name]}
  return (
           <TextField
          
          id={name}
          name={name}
          label={label}
          
         
        > </TextField>
       
    
  )
}








/*
 <Field name={name}>
               {
                  ({field, form})=>{
                    <FormControl >
                         <Typography style={{width:"500px"}}  htmlFor={name}>{label}</Typography>
                          <Input id={name} {...rest} {...field}  />
                          <Typography>{form.errors[name]}</Typography>
                    </FormControl>
                  }
               }
        </Field>

*/        

