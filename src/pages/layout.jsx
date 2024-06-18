import Footer from "../components/Footer";
import Header from "../components/Header";

import Home from "./home";
const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* <Header /> */}
        <main>
          <Home />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
