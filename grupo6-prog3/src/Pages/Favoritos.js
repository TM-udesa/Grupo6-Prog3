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
            parseStorage.map(id => 
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68c61741ed41940e85db7d44de8dd2f6`)
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
                {this.state.movies.map((movies, idx)=>
                    <Card 
                        key={idx}
                        nombre ={movies.title}
                        id ={movies.id}
                        image = {`https://image.tmdb.org/t/p/w342/${movies.poster_path}`}
                    />
                )}
            </>
        )
    }
}

export default Favoritos