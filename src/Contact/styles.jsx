import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    paper: {
        height: '90vh',
        backgroundImage:  "url(https://images.unsplash.com/photo-1618388607276-6dfb062c75a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    subtitle: {
        marginBottom: '10px'
    },
    formControl: {
        marginBottom: '20px',
    },
    textField: {
        width: '50%',
        ".MuiOutlinedInput-input:-webkit-autofill": {
            backgroundColor: "rgba(250, 241, 232)"
          },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    button: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
        backgroundColor: 'rgba(29, 158, 201)',
        '&:hover': {
            backgroundColor: 'rgba(29, 158, 201, 0.7)',
        }
    },
    alert: {
        marginTop: '10px',
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
}))
        
// #5389a3