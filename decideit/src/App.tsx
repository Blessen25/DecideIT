import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header_Signup } from "./components/Header/header";
import { Home } from "./components/Home/home";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";


const App = () => {

  return(

    <>
      <BrowserRouter>
        <Header_Signup />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;