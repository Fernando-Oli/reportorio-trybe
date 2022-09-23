import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clientRemove } from '../redux/actions/removeClient';

class Clientes extends Component {
  constructor(props) {
    super(props);
    const { clientData } = this.props
    this.state = { button: true, clientOrder: clientData }
  }
  orderList = () => {
    const { clientData } = this.props;
    const { button } =this.state;
    if(button === true) {
      const array = [...clientData];
      const mathSort = (a, b) => {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      this.setState({ clientOrder : array.sort(mathSort), button: false })
    } else {
      this.setState({ clientOrder: clientData, button: true });
    }
    
  }
  removeClient = (client) => {
    console.log('oi');
    const { clientData, dispatch } = this.props;
    const array = [...clientData];
    const array1 = array.filter((e) => e.name !== client.name)
    dispatch(clientRemove(array1));
    this.setState({ clientOrder: array1 });
  }

  render() {
    const { clientOrder } = this.state;
    const { dados: { senha, email } } = this.props;
    return (
      <div>
        { senha.length === 0 && email.length === 0 ?  (
            <div>
              <p>Login não efetuado</p>
            </div>
        ): (
            <div>
              <h2>Clientes</h2>
              <Link to="/register">Cadastre-se</Link>
              { clientOrder.length !== 0 && clientOrder.map((e) => (
                <div key={ e.name }>
                  <p>{ e.name }</p>
                  <p>{ e.age }</p>
                  <p>{ e.email }</p>
                  <p onClick={ () => this.removeClient(e) }>X</p>
                </div>
              )) }
              { clientOrder.length === 0 && <p>Nenhum cliente cadastrado</p>}
              <button type="button" onClick={ this.orderList }>Ordenar/Original</button>
            </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ myReducer, myReducer1 }) => ({
    dados: {
    senha: myReducer.password,
    email: myReducer.email,
    },
    clientData: myReducer1.clients
    });

export default connect(mapStateToProps)(Clientes);