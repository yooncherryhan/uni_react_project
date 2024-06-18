import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/login.jsx'
import HomePage from "./pages/layout";
import "./index.css";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
