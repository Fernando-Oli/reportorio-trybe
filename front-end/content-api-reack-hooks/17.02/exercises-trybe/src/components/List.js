import { useContext } from 'react';
import MyContext from '../context';

function List() {
    const { students } = useContext(MyContext);
  return (
    <ul>
        {students.map((e)=> (
            <li>
                Nome: {`${e.name} `}
                Idade: {`${e.age} `}
                Cidade: {`${e.city} `}
                Módulo: {`${e.module} `}
            </li>
        ))}
    </ul>
  );
}

export default List;
