import {
        Link,
         AppBar,
         Toolbar,
         Container,
         Typography,
         Hidden,
         IconButton,
         SwipeableDrawer,
         Divider,
         List,
         ListItem,
        } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

// const navicationLinks = [
//     {id: 1, name: "About", href: ""},
//     {id: 2, name: "Projects", href: ""},
//     {id: 3, name: "Resume", href: 'https://drive.google.com/file/d/1nXjXTmqYEuU76g3LiMUQMb9mflnJXRul/view?usp=sharing'},
//      {id: 3, name: "Resume", href: 'https://app.luminpdf.com/viewer/62d989e8e72731423f9bf17d'},
// ]
function Header() {
    const classes = useStyles(); 
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' color='default'>
     <Container maxWidth='md'>
      <Toolbar disableGutters>
        <Typography variant='h5' className={classes.logo}>Portfolio</Typography>
         <Hidden xsDown>
            <NavLink className={classes.link} to='/'>
                Home
            </NavLink>
            <NavLink className={classes.link} to='/projects'>
                Projects
            </NavLink>
            <Link 
                className={classes.link}
                href= 'https://drive.google.com/file/d/1geQbEDbo_-Nbe_HlVmx9p4rBiBtudA6F/view?usp=drive_link'
                component="a"
                underline='none'
                target="_blank"
             >
             Resume
           </Link>
           <NavLink className={classes.link} to='/contacts'>
                Contact
            </NavLink>
         </Hidden>
         <Hidden smUp>
            <IconButton onClick={() => setOpen(true)} >
                <MenuIcon />
            </IconButton>
         </Hidden>
       </Toolbar>  
      </Container>
      <SwipeableDrawer
          anchor='top'
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          >
        <IconButton  onClick={() => setOpen(false)}>
            <KeyboardArrowDownIcon/>
        </IconButton>
        <Divider/>
        <List>
           <ListItem>
           <NavLink className={classes.link} to='/'>
                Home
           </NavLink>
            </ListItem>
            <ListItem>
            <NavLink className={classes.link} to='/projects'>
                Projects
            </NavLink>
           </ListItem> 
           <ListItem>
           <Link 
                className={classes.link}
                href= 'https://drive.google.com/file/d/1nXjXTmqYEuU76g3LiMUQMb9mflnJXRul/view?usp=sharing'
                component="a"
                underline='none'
                target="_blank"
             >
             Resume
           </Link>
           </ListItem>
           <ListItem>
             <NavLink className={classes.link} to='/contacts'>
                Contact
              </NavLink>
           </ListItem>
        </List>
      </SwipeableDrawer>
     </AppBar>
  )
}

export default Header;
