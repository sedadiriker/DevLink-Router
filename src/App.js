import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Nav/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/followers" element={<Followers/>}/>
      <Route path="/Following" element={<Following/>}/>
     </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
