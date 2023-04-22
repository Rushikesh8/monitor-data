import './App.css';
import { Routes, Route} from "react-router-dom"


import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';



function App() {
 
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/" element={<Dashboard />} />
    <Route path="/login/" element={<Login />} />
    </Routes>
  );
}

export default App;
