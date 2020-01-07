import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from '../components/dashboard'
import Post from '../components/shared/Post'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root : {
        marginTop : 40
    }
})


function Home(){

    const classes = useStyles();
    const [ posts , setPosts ] = useState([])

    useEffect(()=>{

        getPosts()

    },[])

    function getPosts(){
        fetch('http://localhost:5000/posts').then(res => {
            return res.json()
        }).then(data => {
            setPosts(data)
        })
    }

    return (
        <Dashboard>
            <Grid className={classes.root} container direction="column">
                {posts.map(post => (
                    <Grid container justify="center">
                        <Post src={post.srcImage} likes={post.likes} creator={post.creator} />
                    </Grid>
                ))}
            </Grid>
        </Dashboard>
    )
}

export default Home;