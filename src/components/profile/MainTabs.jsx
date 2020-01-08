import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles({
    root : {
        display : 'flex',
        justifyContent : 'center'
    },
    wrapper : {
        flexDirection : 'row'
    },
    icon : {
        marginRight : 5,
        marginBottom : '0 !important'
    },
    tabsFixed : {
        flex : 'none',
        width : 'auto'
    }
})


export default function MainTabs({ value, handleChange }){
    const classes = useStyles();
    return (
        <div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                classes={{
                    root : classes.root,
                    fixed : classes.tabsFixed
                }}
                onChange={(e , index)=>handleChange(index)}
                aria-label="disabled tabs example"
            >
                <Tab classes={{wrapper : classes.wrapper}} label="PUBLICACIONES" icon={<SupervisedUserCircle className={classes.icon} />} />
                <Tab classes={{wrapper : classes.wrapper}} label="IGTV" icon={<SupervisedUserCircle className={classes.icon} />} />
                <Tab classes={{wrapper : classes.wrapper}} label="GUARDADAS" icon={<SupervisedUserCircle className={classes.icon} />} />
                <Tab classes={{wrapper : classes.wrapper}} label="ETIQUETADAS" icon={<SupervisedUserCircle className={classes.icon} />} />
            </Tabs>
        </div>
    )
}