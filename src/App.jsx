import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Courses />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
