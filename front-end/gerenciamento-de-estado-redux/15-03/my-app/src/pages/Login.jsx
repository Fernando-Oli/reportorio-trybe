import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dataForms } from '../redux/actions/loginChange';

class Login extends Component {
  constructor(){
    super();
    this.state = { password: '', email: '' }
  }
  handleChanger = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  handleSubmit = (event) => {
    const { dispatch, history } = this.props;
    event.preventDefault();
    dispatch(dataForms(this.state));
    history.push('/clientes');
  }
  render() {
    const { password, email } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <span>
            Email:
            {' '}
          </span>
          <input type="email" name="email" id="email" onChange={ (e) => this.handleChanger(e)} value={ email }/>
          <span>
            Senha:
            {' '}
          </span>
          <input type="password" name="password" id="password" onChange={ (e) => this.handleChanger(e)} value={ password }/>
          <button type="submit" onClick={ (event) => this.handleSubmit(event) }>Logar</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);