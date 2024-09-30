import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies";
import Loader from "../components/Loader/Loader";

class Favoritos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            loading: true,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parseStorage = JSON.parse(storage);
            const fetchMovies = parseStorage.map(id =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68c61741ed41940e85db7d44de8dd2f6`)
                    .then(response => response.json())
            );
            Promise.all(fetchMovies)
                .then((moviesData) => {
                    this.setState({
                        movies: moviesData,
                        loading: false,
                    });
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                    this.setState({ loading: false });
                });
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <>
                {this.state.loading ? (
                    <Loader />
                ) : this.state.movies.length > 0 ? (
                    <GridMovies movies={this.state.movies} titulo="Favoritos" />
                ) : (
                    <p>No hay películas en favoritos</p>
                )}
            </>
        );
    }
}

export default Favoritos;
