import './App.css';
import Navbar from './components/base/Navbar';
import Beer from './components/beers';
import Footer from './components/base/Footer';
import BeerContextsProvider from './contexts/BeerContextsProvider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BeerContextsProvider>
        <Beer />
      </BeerContextsProvider>
      <Footer />
    </div>
  );
}

export default App;
