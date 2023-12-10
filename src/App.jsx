import President from "./components/Quote/President";
import Negotiations from "./components/Negotiations/Negotiations";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Hero />
        <Negotiations />
        <President />
        <Footer />
      </div>
    </>
  );
}

export default App;
