import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social_links">
                <a href="https://www.facebook.com" className="social_icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" className="social_icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" className="social_icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="social_icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p>Thiago Marcel, Juan Tutaglio, Tomas Garcia Menese</p>
            <p>© 2024 Todos Los Derechos Reservados | Contactanos</p>
        </footer>
    )
}

export default Footer;