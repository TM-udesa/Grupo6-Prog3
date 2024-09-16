import { Component } from "react";
import GridMovies from "../components/GridMovies/GridMovies"

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
            parseStorage.map(id => 
                fetch(`https://api.themoviedb.org/3/movie/${id}&api_key=68c61741ed41940e85db7d44de8dd2f6`)
                .then(response => response.json())
                .then(data => this.setState({
                    movies: [...this.state.movies, data]
                }))
                )

        }
    }

    render() {
        return(
            <>
                <GridMovies />
            </>
        )
    }
}

export default Favoritos