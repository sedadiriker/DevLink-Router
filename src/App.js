import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Nav/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";
import { useState } from "react";
import Login from "./pages/Login/Login";
import axios from "axios";

function App() {
  const [logIn, setLogIn] = useState(false)
  const [userEmail,setUserEmail] = useState("")
  const [user,setUser] = useState("")



  const username = userEmail.split("@")[0]

  const getUser = async () => {
    const URL = `https://api.github.com/users/${username}`

    try{
      const res = await axios(URL)
      const {data} = res  
      return data
    }catch(err){
      console.log(err.message)
    }
  }
  // console.log(user)

  const handleLogin = async (email) => {
    setUserEmail(email)
    try{
      const userData = await getUser()
      setUser(userData)
      setLogIn(true)
    }catch(err) {
      alert("Kullanıcı bulunamadı")
      setLogIn(false)
    }
  }
  return (
    <div className="App">
      {
        logIn ? (
          <BrowserRouter>
          <Menu/>
          <Routes>
           <Route path="/" element={<Home user={user}/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/followers" element={<Followers/>}/>
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
