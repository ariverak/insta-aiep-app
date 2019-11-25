import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl,InputLabel,Input,InputAdornment } from '@material-ui/core'
import { AccountCircle, VpnKey } from '@material-ui/icons'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  input : {
    marginBottom : 20
  }
});

export default function LoginCard() {

  const classes = useStyles();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword  ] = useState('');

  function onLogin(){
    console.log(username,password)
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
          image="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
          title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ingresar a la Aplicación
        </Typography>
        <FormControl className={classes.input} fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">Usuario</InputLabel>
            <Input
              id="usuario"
              onChange={e => setUsername(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
        </FormControl>
        <FormControl className={classes.input} fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">Contraseña</InputLabel>
            <Input
              id="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              }
            />
        </FormControl>
      </CardContent>
      <CardActions>
      <Button onClick={onLogin} fullWidth variant="contained" color="primary">
        INGRESAR
      </Button>
      </CardActions>
    </Card>
  );
}