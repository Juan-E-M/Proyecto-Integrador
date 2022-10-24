import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Header  from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import  PrivateRoutes from "./utils/PrivateRoutes";
import Main from "./Components/Main/Main";


import { AuthProvider } from "./Context/AuthContext";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';



function App() {

  return (
    <div className="general-container">

      <Router>
        <AuthProvider>
          <Header/>

          <Routes>
            <Route element={<PrivateRoutes/>} >
              <Route exact path="/" element = {<HomePage />}  />
            </Route>
            <Route exact path="/main" element = {<Main />} />
            <Route exact path="/login" element = {<LoginPage />} />
          </Routes>
          <Footer/>
        </AuthProvider>
      </Router>

    </div>
  );


}

export default App;
