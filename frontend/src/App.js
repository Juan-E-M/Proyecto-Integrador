import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from "./Components/LandingPage/Header";
import Home from "./Components/LandingPage/Home";
import Nosotros from "./Components/LandingPage/Nosotros";
import Register from './Components/Register/Register';
import Productos from './Components/Productos/Productos';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import Checkout from './Components/Checkout/CheckoutForm/Checkout';
import Footer from './Components/LandingPage/Footer';
import LoginPage from './Components/Login/LoginPage';
import { AuthProvider } from "./Components/Context/AuthContext";
import PrivateRoutes from './Components/utils/PrivateRoutes';
import {Auth2Provider} from "./Components/Context/AuthContext2"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Auth2Provider>
          <AuthProvider>
        <Header/>
          <Routes>
              <Route path='/' element={ <Home/> } />

              <Route path='/productos' element={ <Productos/> } />
              <Route path='/nosotros' element={ <Nosotros/> } />

              <Route path='/login' element={ <LoginPage/> } />

              
              <Route path='/register' element={ <Register/> } />

              <Route path='/checkout' element={ <CheckoutPage/> } />
              <Route path='/pago' element={ <Checkout/> } />
              <Route path='*' element={ <Navigate replace to="/"/> } />
          </Routes>
          <Footer/>
          </AuthProvider>
        </Auth2Provider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;