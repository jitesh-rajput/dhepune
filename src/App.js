
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/constants/Header/Header2";
import CollegeLogin from "./Components/Registration/CollegeLogin";
import Login from "./Components/Registration/Login";
import Registeration1 from "./Components/Registration/Registration1";
import Home from './Components/Home/Main'
import Inbox from "./Components/Inbox/Inbox";
import Discord from "./Components/Discord/Discord";
import Profile from "./Components/Profile/Profile";
import Landing from "./Components/Landing/Landing";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/clogin" element={<CollegeLogin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Registration" element={<Registeration1/>} />
          <Route path="/Inbox" element={<Inbox/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/discord" element={<Discord/>}/>
          <Route path="/profile" element={<Profile/>} />
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
