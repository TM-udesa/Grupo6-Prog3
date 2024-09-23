import { Link } from "react-router-dom";
import SearchResults from "../Search/SearchForm"
import "./Header.css"

const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <img src="./img/Logo.png"></img>
            </div>
            <nav>
                <ul className="main-nav">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/Favoritos">Favoritos</Link> </li>
                    <li> <Link to="/Populares">Populares</Link> </li>
                    <li> <Link to="/Proximamente">Proximamente</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header