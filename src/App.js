import logo from './logo.svg';
import './App.css';
import Navbar from './components/base/Navbar';
import Beer from './components/beers';
import Footer from './components/base/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Beer/>
     <Footer/>
    </div>
  );
}

export default App;
