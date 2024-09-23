
import { Link } from "react-router-dom";

const NotFoundComp = () => {
    return  (
      <div className="conteiner-NotFound">
        <div className="contenido-NotFound">
          <h1>404</h1>
          <h2>Te perdiste</h2>
          <p>
            No podemos encontrar la página que estás buscando.
            (gatitos para piero, apobanos porfas
              🙏)
          </p>
          <Link to="/">
            <button className="inicio-NotFound">Regresar a Inicio</button>
          </Link>
          <div className="img-NotFound">
            <img src="./img/NotFound.png" alt="Not Found" />
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFoundComp;
  