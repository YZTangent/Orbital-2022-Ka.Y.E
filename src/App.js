import './App.css';
import Login from './Pages/Login'
import Signup from'./Pages/Signup'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";  
import { AuthProvider } from './hooks/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
