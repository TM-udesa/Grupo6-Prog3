import {Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home"
import Favoritos from "./Pages/Favoritos"
import Populares from "./Pages/Populares"
import Proximamente from "./Pages/Proximamente"
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Favoritos" component={Favoritos}/>
        <Route exact path="/Populares" component={Populares}/>
        <Route exact path="/Proximamente" component={Proximamente}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
