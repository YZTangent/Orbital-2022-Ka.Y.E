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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}


export default App;
