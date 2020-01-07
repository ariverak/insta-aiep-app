import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root : {
        width : 500,
        height : 500,
        marginBottom : 10,
        '& img' : {
            borderWidth : 5,
            borderRadius : 5,
            objectFit : 'cover',
            width : 500,
            height : 500,
            '&:hover' : {
                filter: 'brightness(0.7)',
                cursor : 'pointer'
            }
        },
    },
    media: {
        height: 0,
        paddingTop: '75%', // 16:9
    },
    likes : {
        marginTop : 10,
        marginLeft : 10
    }
})


export default function MiniPost(props){
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader 
            avatar={
                <Avatar aria-label="recipe" src={props.creator.src} />
            }
            title={<b>{props.creator.name}</b>} />
            <CardMedia
                className={classes.media}
                image={props.src}
                title=""
            />
            <CardActions>
                <b className={classes.likes}>
                    Me gusta : {props.likes}
                </b>
            </CardActions>
        </Card>
    )
}