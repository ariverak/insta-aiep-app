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
        fetch('http://localhost:5000/allposts',{
            headers : {
                'Authorization' : localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setPosts(data)
        })
    }

    return (
        <Dashboard>
            <Grid className={classes.root} container direction="column">
                {posts.map((post,i) => (
                    <Grid key={i} container justify="center">
                        <Post src={post.post} likes={1} creator={post.user} />
                    </Grid>
                ))}
            </Grid>
        </Dashboard>
    )
}

export default Home;