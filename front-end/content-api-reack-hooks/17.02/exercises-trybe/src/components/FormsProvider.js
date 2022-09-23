import Forms from "./Forms";
import Header from './Header';
import MyContext from "../context";
import { useState} from 'react';

function FormsProvider() {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState(0);
  const [ city, setCity] = useState('');
  const [ modulo, setModulo] = useState('Fundamentos');
  const contextValue ={
    name, 
    setName,
    age,
    setAge,
    city,
    setCity,
    modulo,
    setModulo,
  }
  return (
    <div className="App">
      <MyContext.Provider value={ contextValue }>
        <Header/>
        <Forms/>
      </MyContext.Provider>
    </div>
  );
}

export default FormsProvider;
