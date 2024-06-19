import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/login.jsx'
import HomePage from "./pages/layout";
import Dashboard from './components/AdminPanel/admin_pages/Dashboard/dashboard.jsx'
import "./index.css";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
