import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies"

class Populares extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <>
                <section>
                    <GridMovies
                        titulo="Populares"
                        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                        limit="100"
                    />

                </section>
            </>
        )
    }
}

export default Populares