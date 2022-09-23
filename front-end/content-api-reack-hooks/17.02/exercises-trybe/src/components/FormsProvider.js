import Forms from "./Forms";
import MyContext from "../context";
import { useState} from 'react';
import List from './List';

function FormsProvider() {
  const [ students, setStudents] = useState([]);
  const saveStudents = (event, name, age, city, module) => {
    event.preventDefault();
    const stuObj = {
      name,
      age,
      city,
      module,
    }
    const array = [...students, stuObj]
    setStudents(array);
  }
  const contextValue ={
    students,
    saveStudents,
  }
  return (
    <div className="App">
      <MyContext.Provider value={ contextValue }>
        <Forms/>
        <List/>
      </MyContext.Provider>
    </div>
  );
}

export default FormsProvider;
