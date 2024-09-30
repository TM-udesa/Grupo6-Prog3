import { Component } from "react";
import "./Detail.css";
import FavoritosIcon from "../FavoritosIcon/FavoritosIcon";
import Loader from "../Loader/Loader";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detalle: null,
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=68c61741ed41940e85db7d44de8dd2f6`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          detalle: data,
          loading: false,
        })
      )
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { detalle, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <section className="detalle_container">
        <img
          src={`https://image.tmdb.org/t/p/w342/${detalle.poster_path}`}
          alt="Imagen pelicula"
        />
        <p className="text_detail">Nombre de la pelicula: {detalle.title}</p>
        <p className="text_detail">Fecha de estreno: {detalle.release_date}</p>
        <p>Generos:</p>
        <ul>
          {detalle.genres && detalle.genres.length > 0 ? (
            detalle.genres.map((genero, idx) => (
              <li key={idx}>{genero.name}</li>
            ))
          ) : (
            <li>Cargando géneros...</li>
          )}
        </ul>
        <p className="rating">Calificación promedio: {detalle.vote_average}</p>
        <p className="runtime">Duración: {detalle.runtime} mins</p>
        <p>Sinopsis: {detalle.overview}</p>
        <FavoritosIcon id={Number(this.props.id)} />
      </section>
    )
      ;
  }
}

export default Detail;
