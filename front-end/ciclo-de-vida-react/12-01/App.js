import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { dogImage: {}, loading: false };
  }

  componentDidMount() {
    this.getFetch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const string = String(nextState.dogImage);
    if (string.includes('terrier')) { return false; }
    return true;
  }

getFetch = async () => {
  this.setState({ loading: true }, async () => {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json();
    this.setState({ dogImage: response.message, loading: false });
  });
}

handleChanger = ({ target }) => {
  const { value, name } = target;
  this.setState({ [name]: value });
}

saveDog = () => {
  const { dogImage, botao} = this.state;
  localStorage.setItem('cao', [dogImage, botao]);
}

render() {
  const { dogImage, loading, inputText } = this.state;
  return (
    <div className="App">
      { loading ? <p>Loading...</p> : <img
        src={ dogImage }
        alt="cachorros"
        id="img-dog"
        onChange={ this.handleChanger }
        name="link-dog"
      />}
      <br />
      <button type="button" onClick={ this.getFetch }>Nova Foto</button>
      <input
        type="text"
        name="botao"
        value={ inputText }
        onChange={ this.handleChanger }
      />
      <button type="button" onClick={ this.saveDog }>Salvar</button>
    </div>
  );
}
}

export default App;
