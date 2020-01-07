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
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/perfil" component={Profile} />
          <Route component={()=><h1>Esta pagina no existe</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
