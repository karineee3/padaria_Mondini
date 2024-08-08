import Doces from './componets/doces'
import './App.css';
import Navbar from './componets/navbar';
import Salgados from './componets/salgados';
import Footer from './componets/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Salgados></Salgados>
      <Doces></Doces>
      <Footer></Footer>

    </div>
  );
}

export default App;
