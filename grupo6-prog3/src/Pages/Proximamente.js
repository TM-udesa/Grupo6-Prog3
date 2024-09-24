import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies";

class Proximamente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: "" 
        };
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
                        url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                        limit="100"
                        filterValue={this.state.filterValue} 
                    />
                </section>
            </>
        );
    }
}

export default Proximamente;
