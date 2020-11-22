import './App.css';
import { Router } from './components/Router'
import { Footer } from './components/Footer'
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
