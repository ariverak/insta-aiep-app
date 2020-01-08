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
        background : '#f8f8f8'
    }
})


function LoginPage(){

    const classes = useStyles();

    function logIn(username,password){
        fetch('http://localhost:5000/login',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ username , password })
        }).then( async data => {
            if(data.status === 200) {
                localStorage.setItem('accessToken',await data.text());
                window.location.reload();
            }else{
                alert(await data.text())
            }
        })
    }

    return (
        <div className={classes.root}>
            <LoginCard logIn={logIn} />
        </div>
    )
}

export default LoginPage;