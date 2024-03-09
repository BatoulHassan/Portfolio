import React from 'react'
import { projectsData } from '../Data';
import { 
     Container,
     Grid,
     Typography,
     Box,
     Card,
     CardContent,
     CardMedia,
     CardActions, 
     IconButton,
     Button,
     Chip, 
     Hidden} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';

function TagsContainer ({tags}) {
    return (
       <div>
           {tags.map((tag,i) => (
           <Chip label={tag} key={i} variant='outlined'></Chip>
    )) }
       </div>
    )
   
}
function Project({title, description, imgUrl, imgAlt, tags, href, netlify, icon}) {
  const classes = useStyles();
  return (
    <Grid item className={classes.item}>
      <Card className={classes.card}>
        <div>
         <CardContent>
            <Typography variant='h5' paragraph>{title}</Typography>
            <Typography variant='subtitle1' paragraph>{description}</Typography>
            <Hidden mdUp>
                <TagsContainer tags={tags}/>
            </Hidden>
         </CardContent>
         <CardActions>
           <div className={classes.link}>
             {/* <IconButton href={href}  target="_blank">
                <GitHubIcon />
             </IconButton> */}
             <Button className={classes.sourceBtn} variant="contained" href={href} target="_blank">
              Source
            </Button>
            <Button variant="contained" href={netlify} target="_blank">
              View
            </Button>
            </div>
            <Hidden smDown>
                <TagsContainer tags={tags}/>
            </Hidden>
         </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} component="img" image={imgUrl} alt={imgAlt}/>
        </Hidden>
       </Card>
    </Grid>
  )
}
function Projects() {
 const classes = useStyles();
  return (
  <Container maxWidth='md' className={classes.container}>
    <Box pt={4} mb={2}>
      <Typography variant='h4'>Projects</Typography>
    </Box>
    <Grid container direction='column' spacing={4}>
        {projectsData.map((data,i) => (
            <Project key={i} {...data} />
        )) }
    </Grid>
  </Container>
  )
}

export default Projects;
