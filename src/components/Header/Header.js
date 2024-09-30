import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <img src="./img/Logo.png" alt="Logo"></img>
            </div>
            <nav>
                <ul className="main_nav">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/favoritos">Favoritos</Link> </li>
                    <li> <Link to="/populares">Populares</Link> </li>
                    <li> <Link to="/proximamente">Proximamente</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header