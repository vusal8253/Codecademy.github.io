import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import {Education} from './components/Education';
import {Home} from './components/Home';
import {About} from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';


export const App = () => {
  return (
   <div className='App'>
      <Navbar/>
    <Routes>
      <Route path='/education' element={<Education/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/experince' element={<Experience/>} />
    </Routes>
      <Footer/>
   </div>
  );
};

