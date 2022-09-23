import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Register from './pages/Register';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/register" component={Register} />
      </Switch>
    )
  }
}

export default App;
