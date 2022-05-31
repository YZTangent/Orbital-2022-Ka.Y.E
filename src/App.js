import './App.css';
import Login from './Pages/Login'
import Signup from'./Pages/Signup'
import Dashboard from'./Pages/Dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";  
import { useAuth } from './hooks/ProvideAuth';

function App() {

  const { user }  = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}


export default App;
