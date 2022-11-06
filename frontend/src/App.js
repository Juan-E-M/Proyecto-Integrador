
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from "./Components/LandingPage/Header";
import Home from "./Components/LandingPage/Home";
import Nosotros from "./Components/LandingPage/Nosotros";
import Login from "./Components/LandingPage/Login";
import Register from './Components/Register/Register';
import Productos from './Components/Productos/Productos';
import Modal from './Components/Modal/Modal';
import Proyectos from './Components/Proyectos/Proyectos';
import Proyecto from './Components/Proyectos/Proyecto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route path='/' element={ <Home/> } />
          <Route path='productos' element={ <Productos/> } />
          <Route path='nosotros' element={ <Nosotros/> } />
          <Route path='proyectos' element={ <Proyectos/> } />
          <Route path='proyectos/:id/' element={ <Proyecto/> } />
          <Route path='login' element={ <Login/> } />
          <Route path='register' element={ <Register/> } />
          <Route path='modal' element={ <Modal/> } />
          <Route path='*' element={ <Navigate replace to="/"/> } />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;