import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer class="footer">
            <div class="social-links">
                <a href="https://www.facebook.com" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" class="social-icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" class="social-icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p>Thiago Marcel, Juan Tutaglio, Tomas Garcia Menese</p>
            <p>© 2024 Todos Los Derechos Reservados | Contactanos</p>
        </footer>
    )
}

export default Footer;