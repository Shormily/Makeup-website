import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Home/Home";
import About from "./Components/Header/About/About";
import Contact from "./Components/Header/Contact/Contact";
import Packages from "./Components/Header/Packages/Packages";
import Footer from "./Components/Header/Footer/Footer";
import Login from "./Components/Header/Login/Login";
import SignUp from "./Components/Header/SignUp/SignUp";
import AuthProvider from "./Components/Header/Context/AuthProvider";
import PrivateRoute from "./Components/Header/PrivateRoute/PrivateRoute";


function App() {
  return (
   <>
   <AuthProvider>
   <Header/>
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={ <PrivateRoute><About/></PrivateRoute>  }/>
     
      <Route path="/packages" element={<PrivateRoute><Packages/></PrivateRoute>   }/> 
      <Route path="/login" element={ <Login/>  }/> 
      <Route path="/signup" element={ <SignUp/>  }/> 
      <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>   }/>

    </Routes>
    <Footer/>
   </AuthProvider>
   

   </>
  );
}

export default App;
