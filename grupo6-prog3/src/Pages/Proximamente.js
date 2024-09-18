import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies"

class Proximamente extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <>
                <section>
                    <GridMovies
                        titulo="Proximamente"
                        url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                        limit="100"
                    />

                </section>
            </>
        )
    }
}

export default Proximamente