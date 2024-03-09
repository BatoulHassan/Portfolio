import React, { useRef, useState }  from 'react'
import { Paper, Container, TextField, Typography, Button, Collapse, IconButton } from '@material-ui/core'
import {Alert, AlertTitle} from "@material-ui/lab";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {useFormik} from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import useStyles from './styles';

export function Contact() {
    
     const [formSubmitted, setFormSubmitted] = useState(false);
   
    const initialValues = { 
        userName: "",
        email: "",
        message: ""
      };

      const validationSchema = Yup.object({
        userName: Yup.string().required('Required!'),
        email: Yup.string().required('Required'),
        message: Yup.string().required('Required')
      })

      const onSubmit = (values, {resetForm}) => {
        
        console.log('form data', values)
        emailjs.sendForm('service_fna4q3m', 'template_gbfxuqc', form.current, 'iNAUkTehMZlqILbd6')
          .then((result) => {
              console.log(result.text);
              console.log('Email sent');
              setFormSubmitted(true)
          }, (error) => {
              console.log(error.text);
              setFormSubmitted(false)
          });
        resetForm({values:''})
      };

      const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      })

      const [open, setOpen] = useState(true);

      const form = useRef();
      

      const classes = useStyles()

      console.log("form values ,", formik.values)

  return (
    <Paper className={classes.paper}>
        <Container maxWidth='md' className={classes.container}>
          <Typography  variant='subtitle1' className={classes.subtitle}>Get in touch with me</Typography>   
          <form  ref={form} onSubmit={formik.handleSubmit}>
            <div className={classes.formControl}>
               <TextField label='User name'
                          name="userName"
                          value={formik.values.userName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          type='text'
                          className={classes.textField}
                          />
                 {formik.touched.userName && formik.errors.userName ? <Typography variant='subtitle2' color='error' gutterBottom className={classes.error}>{formik.errors.userName}</Typography> : null} 
            </div>
            <div className={classes.formControl}>
               <TextField label='Email'
                          name='email'
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          className={classes.textField}
                          />
              {formik.touched.email && formik.errors.email ? <Typography variant='subtitle2' color='error' gutterBottom className={classes.error}>{formik.errors.email}</Typography> : null} 
            </div>
            <div className={classes.formControl}>
               <TextField label='Message'
                          name='message'
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          variant='outlined'
                          multiline                    
                          className={classes.textField}
                          />
              {formik.touched.message && formik.errors.message ? <Typography variant='subtitle2' color='error' gutterBottom className={classes.error}>{formik.errors.message}</Typography> : null} 
            </div>
            <Button type='submit' size='medium'  className={classes.button}>Submit</Button>
            {
               formSubmitted 
               ? 
                <Collapse in={open}>
                    <Alert
                      icon={<CheckIcon/>}
                      variant='filled'
                      className={classes.alert} 
                      severity="success"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      >
                    <AlertTitle>Success</AlertTitle>
                       Email sent success
                    </Alert>
                </Collapse>
               :
                  null
            }
        </form>
        </Container>
    </Paper>
  )
}

