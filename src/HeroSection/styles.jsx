import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    paper: {
        height: '90vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    box: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        height: '100%',
    },
    grid: {
        height: '100%',
        position: 'relative',
        zIndex: '100',
    },
    // name:{
    //     [theme.breakpoints.down('sm')]: {
    //         fontSize: '30px',
    //         letterSpacing: '1px',
    //     },
    // },
    work:{
        marginBottom: '20px',
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '25px',
        //     letterSpacing: '1px',
        // },
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
    },
}))