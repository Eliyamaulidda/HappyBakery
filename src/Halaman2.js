import './App.css';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Bread from './components/Bread';



function Halaman2() {
  return (
    <div ClassName="App">
     <Navbar/>
      <Bread/>
      {/* <div className="container mt-4">
        <Content/>
      </div> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default Halaman2