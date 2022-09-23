import React from 'react';
import MyContext from '../content';
import '../styles/box.css';

class ColorBox extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
      {({ colors, number, changeColor}) => (
        <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[number] } }
        onClick={ changeColor }
      >
        Click me to change my color!
      </button>
      )}
    </MyContext.Consumer>
    )
  }
}
export default ColorBox;