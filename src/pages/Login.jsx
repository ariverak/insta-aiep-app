import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LoginCard from '../components/login/LoginCard'

const useStyles = makeStyles({
    root : {
        width : '100%',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(32,32,136,1) 42%, rgba(23,85,171,1) 59%, rgba(0,212,255,1) 100%)'
    }
})


function LoginPage(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LoginCard />
        </div>
    )
}

export default LoginPage;