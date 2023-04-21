import './App.css';
import { Routes, Route} from "react-router-dom"
import PrivateRoute from './components/privateRoute';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';



function App() {
 
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
