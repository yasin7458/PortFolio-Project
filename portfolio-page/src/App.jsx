import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Experience />
      <Portfolio />
      <Pricing />
      <Slider />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}

export default App;