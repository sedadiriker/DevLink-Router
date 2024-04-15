import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Nav/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";
import { useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [logIn, setLogIn] = useState(false)
  const [user,setUser] = useState("")

  const handleLogin = (data) => {
    setUser(data);
    setLogIn(true);
  };
  
  // console.log(user)
 
 
  return (
    <div className="App">
      {
        logIn ? (
          <BrowserRouter>
          <Menu/>
          <Routes>
           <Route path="/" element={<Home user={user}/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/followers" element={<Followers user={user}/>}/>
           <Route path="/Following" element={<Following/>}/>
          </Routes>
          <Footer/>
           </BrowserRouter>
        ) : (
          <Login login={handleLogin}/>
        )
      }
    </div>
  );
}

export default App;
