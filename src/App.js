import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Butterfly from "./components/Butterfly/Butterfly";
import { useEffect, useState } from "react";
import { ParallaxText } from "./components/ScrollBanner/Scrollbanner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Butterfly />
      ) : (
        <>
          <NavBar />
          <Banner />
        
          <Projects />
          <Contact />

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
