import {Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Header />

      <section> 
        <h1>el mejor equipo</h1>
      </section>
      <Home />
      <Footer />
    </>
  );
}

export default App;
