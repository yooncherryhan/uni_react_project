import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/login.jsx'
import HomePage from "./pages/layout";
import Dashboard from './components/AdminPanel/admin_pages/Dashboard/dashboard.jsx'
import User from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import StudentPanel from './components/StudentPanel/pages/index.jsx'
import CategoryCreate from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import "./index.css";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/users" element={<User />}></Route>
          <Route path="/student" element={<StudentPanel />}></Route>
          <Route path="/category-create" element={<CategoryCreate />}></Route>


        </Routes>
      </Router>
    </>
  );
};

export default App;
