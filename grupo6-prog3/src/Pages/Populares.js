import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies";

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filterValue: "" 
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                });
            })
            .catch((error) => console.log(error));
    }

    handleFilter(e) {
        this.setState({
            filterValue: e.target.value,
        });
        console.log(this.state.filterMovies);
    }

    handleResetFilter() {
        this.setState({
            filterValue: "",
        });
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.filterValue}
                    onChange={(e) => this.handleFilter(e)} 
                    placeholder="Buscar película..."
                    className="filter-input"
                />
                <button onClick={() => this.handleResetFilter()}>Reset Filter</button>
                <section>
                    <GridMovies 
                        movies={this.state.movies}
                        titulo="Populares"
                        filterValue={this.state.filterValue}
                        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                        limit="100"
                    />
                </section>
            </>
        );
    }
}

export default Populares;
