import React from "react";
import PropTypes from "prop-types";
class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon
        const {value, measurementUnit} = averageWeight;
        return (
            <div className='pokemons-list'>
                <p>{name}{'\n'}</p>
                <p>{type}</p>
                <p>{value}{measurementUnit}</p>
                <img src = {image} alt = "Imagem pokemon"></img>
            </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
  };
export default Pokemon;