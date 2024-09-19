import { Component } from "react";

class Detail extends Component{
    constructor(props){
        super(props);

        this.state = {
            detalle: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=68c61741ed41940e85db7d44de8dd2f6`)
            .then(response => response.json() )
            .then( data => this.setState(
                {detalle: data}
            ))
            .catch( error => console.log(error));
        }
    
    render() {
        return (
            <>  
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt="Imagen pelicula" />
                <p>{this.state.detalle.title}</p>
                
            </>
        )
    }
}

export default Detail