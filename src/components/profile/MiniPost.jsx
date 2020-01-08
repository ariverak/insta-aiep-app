import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root : {
        width : 293,
        height : 293,
        marginBottom : 10,
        '& img' : {
            borderWidth : 5,
            borderRadius : 5,
            objectFit : 'cover',
            width : 293,
            height : 293,
            '&:hover' : {
                filter: 'brightness(0.7)',
                cursor : 'pointer'
            }
        }
    }
})


export default function MiniPost(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={props.src} alt="" />
        </div>
    )
}