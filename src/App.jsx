import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/layout";
import "./index.css";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
