import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonOutline from '@material-ui/icons/PersonOutline';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color : 'black'
  },
  title: {
    flexGrow: 1,
  },
  appbar : {
    background : 'white',
    color : 'black',
  },
  toolbar : {
    height : 80,
      background : 'white',
      color : 'black',
      margin : '0 15%'
  },
  logo : {
    width : 40,
    height : 40,
    marginRight : 15
  },
  profileButton : {
    fontSize : 35
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
            <Link to="/">
                <img className={classes.logo} src={process.env.PUBLIC_URL + "/logo.png"} alt="" />
            </Link>
            <Typography variant="h6" className={classes.title}>
              Insta AIEP
            </Typography>
          <Link to="/perfil">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <PersonOutline className={classes.profileButton} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}