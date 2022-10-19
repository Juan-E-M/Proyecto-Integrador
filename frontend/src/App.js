import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Header  from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import  PrivateRoutes from "./utils/PrivateRoutes";
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
              <Route element = {<HomePage />} path="/" exact />
            </Route>
            <Route element = {<LoginPage />} path="/login" exact />
          </Routes>
          <Footer/>
        </AuthProvider>
      </Router>

    </div>
  );


}

export default App;
