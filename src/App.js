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
import { ProvideAuth, useAuth } from './hooks/ProvideAuth';

function App() {

 const auth = useAuth();

//  const user = auth.user;

  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ProvideAuth>
  );
}


export default App;
