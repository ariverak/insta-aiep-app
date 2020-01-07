import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Dashboard from '../components/dashboard'
import MiniPost from '../components/profile/MiniPost'
import MyInfo from '../components/profile/MyInfo'
import MainTabs from '../components/profile/MainTabs'

const useStyles = makeStyles({
    root : {
     
    },
    header : {
        paddingLeft : '20%',
        paddingRight : '20%'
    },
    content : {
        paddingLeft : '10%',
        paddingRight : '10%',
        paddingBottom : '10%'
    }
})

function Profile(){
    const [ tabIndex , setTabIndex ] = useState(0);
    const classes = useStyles();
    const posts = [
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
        "https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg"
    ];
    function handleChange(index){
        setTabIndex(index)
    }

    return (
        <Dashboard>
            <div className={classes.header}>
                <MyInfo />
            </div>
            <MainTabs value={tabIndex} handleChange={handleChange} />
            <br />
            <div className={classes.content}>
                <Grid container>
                    {posts.map(url=>(
                        <Grid item xs={4}>
                            <MiniPost src={url} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Dashboard>
    )
}

export default Profile;