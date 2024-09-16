import Card from "../Card/Card"
import { Component } from "react";

const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGM2MTc0MWVkNDE5NDBlODVkYjdkNDRkZThkZDJmNiIsIm5iZiI6MTcyNjQzNzE2OC40Njc5NjEsInN1YiI6IjY2ZTZmZDFkMzc2OGE3M2Y4ZDkxNmEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jw0BEB-N50O_V6bq90B3HTVrviQgH0nesB7zO2INN3w",
      Accept: "application/json"
    }
};

class GridMovies extends Component{

    constructor(props){
        super(props);
        this.state = {
            datos: []
        }
    }
    
    componentDidMount(){
        fetch(this.props.url, options)
            .then(response => response.json() )
            .then( data => this.setState(
                {datos: data.results}
            ))
            .catch( error => console.log(error));
    }
    render(){
        return(
                <section>
                    <h2>{this.props.titulo}</h2>
                    {this.state.datos.length === 0 ?
                    <h3> Cargando... </h3> :
                    <>{this.state.datos.map((data, idx)=>
                        <Card 
                        key={idx}
                        nombre ={data.title}
                        id ={data.id}
                        />
                    )}
                    </>
                    }
                </section>
        )

    }
}

export default GridMovies