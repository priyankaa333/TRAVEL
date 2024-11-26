import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Tours from './Pages/Tours/Tours';
import Conatct from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/contact' element={<Conatct/>}/>
      </Routes>
    </div>
  );
}

export default App;
