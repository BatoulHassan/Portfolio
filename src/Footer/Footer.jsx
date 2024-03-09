import { Container, Grid, Typography, Box, IconButton } from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
//import PhoneEnabled from '@material-ui/icons/PhoneEnabled';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';

const contact = [
    {icon: LocationOnIcon, text:"Jablah,Lattakia,Syria"},
    {icon: EmailIcon, text:"batoulhassan264@gmail.com"},
    {icon: PhoneEnabledIcon, text:"+963 0931874999"},
    {icon: GitHubIcon, text:"https://github.com/BatoulHassan"},
]
function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.box} pt={2} pb={2}>
      <Container maxWidth='md'>
          <Grid container spacing={1}>
            {contact.map((item,i) => (
              <Grid item key={i} xs={12} md={6} className={classes.item}>
                <item.icon  className={classes.icon}/>
                <Typography variant='h6'>{item.text}</Typography>
              </Grid>
            ))}
          </Grid>
      </Container>
      </Box>  
    )
}

export default Footer;


// return (
//   <Box className={classes.box} pt={2} pb={2}>
//     <Container maxWidth='md'>
//         <Grid container spacing={1}>
//           {contact.map((item,i) => (
//             <Grid item key={i} xs={12} md={6} className={classes.item}>
//               <item.icon  className={classes.icon}/>
//               <Typography variant='h6'>{item.text}</Typography>
//             </Grid>
//           ))}
//         </Grid>
//     </Container>
//     </Box>  
//   )