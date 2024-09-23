import {Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./Pages/Home"
import Favoritos from "./Pages/Favoritos"
import Populares from "./Pages/Populares"
import Proximamente from "./Pages/Proximamente"
import Detalles from "./Pages/Datalles"
import NotFound from "./Pages/NotFound"
import SearchResults from "./Pages/SearchResults"

import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favoritos" component={Favoritos}/>
        <Route exact path="/populares" component={Populares}/>
        <Route exact path="/proximamente" component={Proximamente}/>
        <Route exact path="/pelicula/:id" component={Detalles}/>
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="" component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
