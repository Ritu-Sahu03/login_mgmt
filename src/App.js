import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "./component/Register";
import LoginPage from "./component/LoginPage";
import UserList from './component/ShowUsers';
import Homepage from "./component/homepage";
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/users" element={<UserList />} />
    <Route path="/home" element={<Homepage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
