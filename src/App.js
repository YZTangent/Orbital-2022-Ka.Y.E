import './App.css';
import Login from './Pages/Login'
import Signup from'./Pages/Signup'
import Dashboard from'./Pages/Dashboard'
import Front from './Pages/Front';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";  
import { useAuth, ProvideAuth } from './hooks/ProvideAuth';


function App() {

  const auth = useAuth();

  function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/" element={auth.user ? <Dashboard /> : <Front />} />
          <Route path="/#" element={auth.user ? <Dashboard /> : <Front />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </ProvideAuth>
  );
}


export default App;
