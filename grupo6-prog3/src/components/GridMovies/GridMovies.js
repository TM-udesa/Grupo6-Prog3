import Card from "../Card/Card"
import { Component } from "react";
import "./GridMovies.css"

const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGM2MTc0MWVkNDE5NDBlODVkYjdkNDRkZThkZDJmNiIsIm5iZiI6MTcyNjQzNzE2OC40Njc5NjEsInN1YiI6IjY2ZTZmZDFkMzc2OGE3M2Y4ZDkxNmEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jw0BEB-N50O_V6bq90B3HTVrviQgH0nesB7zO2INN3w",
      Accept: "application/json"
    }
};

class GridMovies extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: this.props.movies || []
        }
    }
    
    componentDidMount(){
        if (this.state.movies.length === 0) {
        fetch(this.props.url, options)
            .then(response => response.json() )
            .then( data => this.setState(
                {movies: data.results.slice(0,this.props.limit)}
            ))
            .catch( error => console.log(error));
    }}
    render(){
        return(
                <section className="main_body">
                    <h2>{this.props.titulo}</h2>
                    {this.state.movies.length === 0 ?
                    <h3>No encontramos resultados para tu busqueda</h3> :
                    <>{this.state.movies.map((movie, idx)=>
                        <Card className="card"
                        key={idx}
                        nombre ={movie.title}
                        id ={movie.id}
                        image = {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                        descripcion = {movie.overview}
                        />
                    )}
                    </>
                    }
                </section>
        )

    }
}

export default GridMovies