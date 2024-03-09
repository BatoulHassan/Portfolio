import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import useStyles from './styles';
import {Zoom} from '@material-ui/core';

function HeroSection() {
    const [shouldShow, setShouldShow] = useState(false);
    useEffect(() => {
      setShouldShow(true)
    }, [])
    const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.overlay}></div>
       <Container className={classes.container} maxWidth='md'>
        <Grid className={classes.grid} container alignItems='center' >
          <Zoom in={shouldShow}>
            <Grid item sm={10} md={8}>
              <Typography className={classes.name} variant='h3'>My name is Batoul Hassan.I'm a software engineer.</Typography>
              <Typography className={classes.work} variant='subtitle1'>
                 I'm interested in front end design for building user interfaces using React,
                 and looking for an internship.
              </Typography>
             </Grid>
            </Zoom> 
        </Grid>
       </Container>
    </Paper>
  )
}

export default HeroSection;


