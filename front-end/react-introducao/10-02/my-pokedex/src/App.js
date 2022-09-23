import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='titulo'>Pokedex</h1>
      </header>
      <main>
          {pokemons.map((e) => <Pokemon pokemon = {e}/>)}
      </main>
    </div>
  );
}

export default App;
