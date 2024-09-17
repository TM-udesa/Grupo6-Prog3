import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies"
import Card from "../components/Card/Card"

class Favoritos extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parseStorage = JSON.parse(storage)
            const fetchMovies = parseStorage.map(id =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68c61741ed41940e85db7d44de8dd2f6`)
                    .then(response => response.json())
                );
            Promise.all(fetchMovies)
                .then((moviesData) => {
                    this.setState({
                        movies: moviesData
                    });
                })

        }
    }

    render() {
        return(
            <>  {this.state.movies.length > 0 ? (
                    <GridMovies movies = {this.state.movies} titulo = "Favoritos"/>
                    ) : (
                    <p>No hay peliculas en favoritos</p>
                    )}
            </>
        )
    }
}

export default Favoritos