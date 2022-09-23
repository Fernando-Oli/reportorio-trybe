import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataClient } from '../redux/actions/registerClient';

class Register extends Component {
  constructor() {
    super();
    this.state = { name: '', age: '', email: '' }
  }

  handleChanger = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (event) => {
    const { dispatch, history } = this.props;
    event.preventDefault();
    dispatch(dataClient(this.state));
    history.push('/clientes');
  }

  render() {
    const { dados: { senha, emailLogin } } = this.props;
    const { age, name, email } = this.state;
    return (
      <div>
        { senha.length === 0 || emailLogin.length === 0 ?  (
          <p>Login não efetuado</p>
        ) : (
          <div>
            <h2>Register</h2>
          <form>
            <input type="text" name="name" id="name" onChange={ (target) => this.handleChanger(target) } value={ name }/>
            <input type="number" name="age" id="age" onChange={ (target) => this.handleChanger(target) } value={ age }/>
            <input type="email" name="email" id="email" onChange={ (target) => this.handleChanger(target) } value={ email }/>
            <button type="submit" onClick={ (e) => this.handleSubmit(e) }>Virar Cliente</button>
          </form>
          </div>
        ) }
      </div>
    );
  }
}
const mapStateToProps = ({ myReducer }) => ({
  dados: {
  senha: myReducer.password,
  emailLogin: myReducer.email,
  },
  });
export default connect(mapStateToProps)(Register);