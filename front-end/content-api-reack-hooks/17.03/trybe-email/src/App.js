import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Emails from './components/Emails';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Header />
        <Buttons />
        <Emails />
      </MyProvider>
    </div>
  );
}

export default App;
