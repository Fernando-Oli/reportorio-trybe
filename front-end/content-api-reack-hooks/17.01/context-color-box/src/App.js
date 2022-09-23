import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './content';

class App extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 }
  }
  changeColor = () => {
    const { number } = this.state;
    if(number === 2) {
      this.setState({ number: 0 });
    } else {
      this.setState((PrevState)=> ({ number: PrevState.number + 1 }));
    }
  }
  render() {
    const { number } = this.state;
    const colors = ['red', 'yellow', 'blue'];
    const contextValue = {
      colors: colors,
      changeColor: this.changeColor,
      number: number,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <ColorBox />
      </MyContext.Provider>)
  }
}

export default App;
