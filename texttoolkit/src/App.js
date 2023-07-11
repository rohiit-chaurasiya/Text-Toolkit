import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signin" element={<Auth/>}/>
      
      
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
