import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Menu from "./components/Nav/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";
import { useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [logIn, setLogIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (data) => {
    setUser(data);
    setLogIn(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={logIn ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route path="/followers" element={<Followers user={user} />} />
          <Route path="/following" element={<Following user={user} />} />
          <Route
            path="/login"
            element={logIn ? <Navigate to="/" /> : <Login id="login" login={handleLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
