import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies";

const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGM2MTc0MWVkNDE5NDBlODVkYjdkNDRkZThkZDJmNiIsIm5iZiI6MTcyNjQzNzE2OC40Njc5NjEsInN1YiI6IjY2ZTZmZDFkMzc2OGE3M2Y4ZDkxNmEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jw0BEB-N50O_V6bq90B3HTVrviQgH0nesB7zO2INN3w",
      Accept: "application/json"
    }
};

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filterMovies: [],
            filterValue: "" 
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    filterMovies: data.results
                });
            })
            .catch((error) => console.log(error));
    }

    handleFilter(e) {
        const userValue = e.target.value;
        this.setState({
            filterValue: userValue, 
            filterMovies: this.state.movies.filter(movie => 
                movie.title.toLowerCase().includes(userValue.toLowerCase())
            )
        });
    }

    handleResetFilter() {
        this.setState({
            filterValue: "", 
            filterMovies: this.state.movies
        });
    }

    render() {
        return (
            <>
                <input 
                    type="text" 
                    value={this.state.filterValue} 
                    onChange={(e) => this.handleFilter(e)} 
                />
                <button onClick={() => this.handleResetFilter()}>Reset Filter</button>
                <section>
                    <GridMovies 
                        movies={this.state.filterMovies}
                        titulo="Populares"
                        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                        limit="100"
                    />
                </section>
            </>
        );
    }
}

export default Populares;
