import { Component } from "react";
import "./Detail.css"
import FavoritosIcon from "../FavoritosIcon/FavoritosIcon";

class Detail extends Component{
    constructor(props){
        super(props);

        this.state = {
            detalle: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=68c61741ed41940e85db7d44de8dd2f6`)
            .then(response => response.json() )
            .then( data => this.setState(
                {detalle: data}
            ))
            .catch( error => console.log(error));
        }
    
    render() {
        return ( 
            <section className="detalle_container">
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt="Imagen pelicula" />
                <p className="text_detail">Nombre de la pelicula: {this.state.detalle.title}</p>
                <p className="text_detail">Fecha de estreno: {this.state.detalle.release_date}</p>
                <p>Generos:</p>
                <ul>
                    {this.state.detalle.genres && this.state.detalle.genres.length > 0 ? (
                    this.state.detalle.genres.map((genero, idx) => (
                    <li key={idx}>{genero.name}</li>
                    ))
                    ) : (
                    <li>Cargando géneros...</li>
                    )}
                </ul>
                <p className="rating">Calificacion promedio: {this.state.detalle.vote_average}</p>
                <p className="runtime">Duracion: {this.state.detalle.runtime}mins</p>
                <p>Sinopsis: {this.state.detalle.overview}</p>
                <FavoritosIcon id={Number(this.props.id)} />
                
            </section>
        )
    }
}

export default Detail