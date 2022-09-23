import { useContext, useState} from 'react';
import MyContext from '../context';
function Forms() {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState(0);
  const [ city, setCity] = useState('');
  const [ module, setModule] = useState(false);
  const handleChange = (e, setState) => {
    setState(e.value);
  }
  const { saveStudents } = useContext(MyContext);
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
    <label onChange={ ({ target }) => setModule(target.value) }>
    <input type="radio" value="Fundamentos" name="module" />
      Fundamentos
      <input type="radio" value="Front-end" name="module"/>
      Front-end
      <input type="radio" value="Back-end" name="module"/>
      Back-end
      <input type="radio" value="Ciência da Computação" name="module"/>
      Ciência da Computação
    </label>
    <input type="submit" value="Submit" onClick={ (e) => saveStudents(e, name, age, city, module) }/>
  </form>
  );
}

export default Forms;