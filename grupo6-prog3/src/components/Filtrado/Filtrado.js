import { Component } from "react";

class Filtrado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filterMovies: [],
            filterValue: "" 
        };
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
            </>
        )
    }
}

export default Filtrado