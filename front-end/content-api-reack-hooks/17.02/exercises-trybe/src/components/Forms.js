import { useState} from 'react';

function Forms() {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState(0);
  const [ city, setCity] = useState('');
  const [ modulo, setModulo] = useState(false);
  const handleChange = (e, setState) => {
    setState(e.value);
  }
  return (
    <form>
    <label>
      Name:
      <input type="text" name="name" onChange={ (e) => handleChange(e.target, setName) } />
    </label>
    <label>
      Idade:
      <input type="number" name="age" onChange={ (e) => handleChange(e.target, setAge) }/>
    </label>
    <label>
      Cidade
      <input type="text" name="city" onChange={ (e) => handleChange(e.target, setCity) }/>
    </label>
    <label onChange={ ({ target }) => setModulo(target.value) }>
    <input type="radio" value="Fundamentos" name="modulo" />
      Fundamentos
      <input type="radio" value="Front-end" name="modulo"/>
      Front-end
      <input type="radio" value="Back-end" name="modulo"/>
      Back-end
      <input type="radio" value="Ciência da Computação" name="modulo"/>
      Ciência da Computação
    </label>
    <input type="submit" value="Submit" />
  </form>
  );
}

export default Forms;