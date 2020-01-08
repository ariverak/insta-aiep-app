import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import BrightnessLow from '@material-ui/icons/BrightnessLow';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root : {
        height : 150,
        marginTop : 60,
        marginBottom : 44
    },
    avatarContainer : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    avatar : {
        width : 130,
        height : 130
    },
    profileName : {
        fontWeight: 300,
        fontSize : 28,
        color : '#5C5C5C'
    },
    infoContainer : {
        display : 'inline-flex',
        alignItems : 'center',
        '& button' : {
            height : 30,
            marginLeft : 10,
            fontSize : 12
        },
        '& div' : {
            width : 'auto',
            marginRight : 15
        },
    },
    infoCount : {
        marginTop : -50
    },
    setupIcon : {
        marginLeft : 10,
        cursor : 'pointer'
    },
    menu : {
        minWidth : 120
    }
})

export default function MyInfo(){

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function closeSession(){

        localStorage.removeItem('accessToken');
        handleClose()
        window.location.replace('/')
    }

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.avatarContainer} item xs={4}>
               <Avatar className={classes.avatar} src="https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg" />
            </Grid>
            <Grid item xs={8}>
                <Grid style={{ height : '100%' }} container alignItems="flex-start">
                    <Grid className={classes.infoContainer} item xs={12}>
                        <h1 className={classes.profileName}>Nombre Cuenta</h1>
                        <Button variant="outlined">Editar Perfil</Button>
                        <div>
                            <BrightnessLow onClick={handleClick} className={classes.setupIcon} />
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem className={classes.menu} onClick={closeSession}>Salir</MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                    <Grid className={clsx(classes.infoContainer,classes.infoCount)} item xs={12}>
                        <Grid container alignItems="center" >
                            <Typography component="b">
                                    12
                            </Typography>
                            <Typography style={{marginLeft : 3}} variant="body2">
                                publicaciones
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                            <Typography component="b">
                                15
                            </Typography>
                            <Typography  style={{marginLeft : 3}} variant="body2">
                                seguidores
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                            <Typography component="b">
                                20
                            </Typography>
                            <Typography  style={{marginLeft : 3}} variant="body2">
                                seguidos
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}