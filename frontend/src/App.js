import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from "./Components/LandingPage/Header";
import Home from "./Components/LandingPage/Home";
import Nosotros from "./Components/LandingPage/Nosotros";
import Login from "./Components/LandingPage/Login";
import Register from './Components/Register/Register';
import Productos from './Components/Productos/Productos';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import Checkout from './Components/Checkout/CheckoutForm/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route path='/' element={ <Home/> } />
          <Route path='productos' element={ <Productos/> } />
          <Route path='nosotros' element={ <Nosotros/> } />
          <Route path='login' element={ <Login/> } />
          <Route path='register' element={ <Register/> } />
          <Route path='checkout' element={ <CheckoutPage/> } />
          <Route path='pago' element={ <Checkout/> } />
          <Route path='*' element={ <Navigate replace to="/"/> } />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;