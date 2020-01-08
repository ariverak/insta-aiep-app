import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  let accessToken = localStorage.getItem('accessToken');
  return (
    <div className="App">
      <BrowserRouter>
        {
          accessToken ? 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/perfil" component={Profile} />
            <Route component={()=><h1>Esta pagina no existe</h1>} />
          </Switch> :
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route component={()=><h1>Esta pagina no existe</h1>} />
          </Switch> 
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
