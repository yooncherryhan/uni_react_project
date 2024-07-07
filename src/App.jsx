import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/login.jsx'
import HomePage from "./pages/layout";
import Dashboard from './components/AdminPanel/admin_pages/Dashboard/dashboard.jsx'
import User from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import StudentPanel from './components/StudentPanel/pages/index.jsx'
import CategoryCreate from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import CategoryList from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import CategoryUpdate from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import SubjectCreate from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import SubjectList from './components/AdminPanel/admin_components/Dashboard/index.jsx'
import SubjectUpdate from './components/AdminPanel/admin_components/Dashboard/index.jsx'
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

          {/* Category */}
          <Route path="/category" element={<CategoryList />}></Route>
          <Route path="/category-create" element={<CategoryCreate />}></Route>
          <Route path="/category-update/:id" element={<CategoryUpdate />}></Route>

          {/* Subject */}

          <Route path="/subject" element={<SubjectList />}></Route>
          <Route path="/subject-create" element={<SubjectCreate />}></Route>
          <Route path="/subject-update/:id" element={<SubjectUpdate />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
