import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies";

class Proximamente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filteredMovies: [],
            filterValue: "",
            actualPage : 1
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${this.state.actualPage}&api_key=31e421d77201e7a1eefe33f85b67fa3b`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    filteredMovies: data.results,
                }
                )})
            .catch((error) => console.log(error));
    }

    handleFilter(e) {
        this.setState({
            filterValue: e.target.value 
        });
    }

    handleResetFilter() {
        this.setState({
            filterValue: "" 
        });
    }

    handleLoadMore(){
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${this.state.actualPage + 1}&api_key=31e421d77201e7a1eefe33f85b67fa3b`
        )
        .then(response => response.json())
        .then((data) => {
            this.setState({
                movies: this.state.movies.concat(data.results),
                filteredMovies: this.state.filteredMovies.concat(data.results),
                actualPage: this.state.actualPage + 1
            });
        })
        .catch((error) => console.log(error));
        console.log(this.state.movies);
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
                        titulo="Proximamente"
                        movies={this.state.movies}
                        url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                        filterValue={this.state.filterValue} 
                        cargarMas = {true}
                    />
                <button onClick={() => this.handleLoadMore()}>Cargar Mas</button>
                </section>
            </>
        );
    }
}

export default Proximamente;
