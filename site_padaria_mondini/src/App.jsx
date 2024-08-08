import Doces from './componets/doces'
import './App.css';
import Navbar from './componets/navbar';
import Salgados from './componets/salgados';
import Bebidas from './componets/bebidas';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Salgados></Salgados>
      <Doces></Doces>
      <Bebidas></Bebidas>

    </div>
  );
}

export default App;
