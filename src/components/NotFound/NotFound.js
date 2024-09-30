import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFoundComp = () => {
    return  (
      <div className="conteiner_NotFound">
        <div className="contenido_NotFound">
          <h1>404</h1>
          <h2>Te perdiste</h2>
          <p>
            No podemos encontrar la página que estás buscando!
            
          </p>
          <Link to="/">
            <button className="inicio_NotFound">Regresar a Inicio</button>
          </Link>
          <div className="img_NotFound">
            <img src="./img/NotFound.png" alt="Not Found" />
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFoundComp;
  