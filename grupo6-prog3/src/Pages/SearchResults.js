import { Component } from "react"
import MoviesGrid from "../components/GridMovies/GridMovies";
import Loader from "../components/Loader/Loader";

class SearchResults extends Component{
    constructor(props){
        super(props)

        this.state ={
            movies:[],
            isLoading:true
        }
    }
    componentDidMount() {
        this.setState({
            isLoading:true
        })
        const query = this.props.location.state.query;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=33e10f642f640258287c658cad162391`)
            .then(response => response.json())
            .then((data) => this.setState({
                movies:data.results,
                isLoading:false
            }))
            .catch((error) => console.log(error));
    }
    

    render() {
        return (
            <div>
                {!this.state.isLoading ? <MoviesGrid movies={this.state.movies} /> : (
          <Loader />)}
            </div>
        );
    }
}

export default SearchResults