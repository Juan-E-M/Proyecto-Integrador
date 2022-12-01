import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from "./Components/LandingPage/Header";
import Nosotros from "./Components/Nosotros/Nosotros";
import Register from './Components/Register/Register';
import Productos from './Components/Productos/Productos';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import Checkout from './Components/Checkout/CheckoutForm/Checkout';
import Footer from './Components/LandingPage/Footer';
import LoginPage from './Components/Login/LoginPage';
import { AuthProvider } from "./Components/Context/AuthContext";
import Informacion from './Components/LandingPage/Informacion';
import Producto from './Components/Productos/Producto';
import Proyecto from './Components/Proyectos/Proyecto';
import Proyectos from './Components/Proyectos/Proyectos';
import Profile from './Components/Usuario/Profile';
import EditProfile from './Components/Usuario/EditProfile';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <Header/>
          <Routes>
              <Route path='/' element={ <Informacion/> } />
              <Route path='/productos' element={ <Productos/> } />
              <Route path='productos/:id' element={ <Producto/> } />
              <Route path='proyectos' element={ <Proyectos/> } />
              <Route path='proyectos/:id/' element={ <Proyecto/> } />
              <Route path='/nosotros' element={ <Nosotros/> } />
              <Route path='/login' element={ <LoginPage/> } />
              <Route path='/register' element={ <Register/> } />
              <Route path='/checkout' element={ <CheckoutPage/> } />
              <Route path='/pago' element={ <Checkout/> } />
              <Route path='/profile' element={ <Profile/> } />
              <Route path='/editProfile' element={<EditProfile/>} />
              <Route path='*' element={ <Navigate replace to="/"/> } />
          </Routes>
          <Footer/>
          </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;