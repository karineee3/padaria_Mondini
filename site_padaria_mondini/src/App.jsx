import Doces from './componets/doces'
import './App.css';
import Navbar from './componets/navbar';
import Salgados from './componets/salgados';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Salgados></Salgados>
      <Doces></Doces>
      

    </div>
  );
}

export default App;
