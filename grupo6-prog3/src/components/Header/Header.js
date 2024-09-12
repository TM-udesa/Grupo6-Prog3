import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

    return (
        <nav>
            <ul className="main-nav">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/">Favoritos</Link> </li>
                <li> <Link to="/">Ver todas</Link> </li>
                <li> <Link to="/">Ver todas</Link> </li>
            </ul>
            <ul className="logo">
                <li> <img src="./img/Logo.png"></img></li>
            </ul>
        </nav>
    )
}

export default Header