import Navbar from "./components/Navbar";
import "./styles.scss";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
