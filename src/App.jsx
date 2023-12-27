import President from "./components/Quote/President";
import Negotiations from "./components/Topics/Topics";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import Events from "./components/events/Events";
import Joinus from "./components/joinus/Joinus";
import Flags from "./flags/flags";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <President />
        <Flags />
        <Hero />
        <Negotiations />
        <Joinus />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
