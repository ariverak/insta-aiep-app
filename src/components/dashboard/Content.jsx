import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding : '0 15px'
  }
}));

export default function Content(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { props.children }
    </div>
  );
}