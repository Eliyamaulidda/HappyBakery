import logo from './logo.svg';
import './App.css';
//import Komponen1 from ' ./components/Komponen1';
//import ClassKomponen from ' ./components/ClassKomponen';

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
