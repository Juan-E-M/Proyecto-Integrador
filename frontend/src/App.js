
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from "./Components/LandingPage/Header";
import Home from "./Components/LandingPage/Home";
import Nosotros from "./Components/LandingPage/Nosotros";
import Login from "./Components/LandingPage/Login";
import Register from './Components/Register/Register';
import Productos from './Components/Productos/Productos';
import Producto from './Components/Productos/Producto';
import Informacion from './Components/Informacion/Informacion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route path='/' element={ <Informacion/> } />
          <Route path='productos' element={ <Productos/> } />
          <Route path='productos/:id' element={ <Producto/> } />
          <Route path='nosotros' element={ <Nosotros/> } />
          <Route path='login' element={ <Login/> } />
          <Route path='register' element={ <Register/> } />
          <Route path='*' element={ <Navigate replace to="/"/> } />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;