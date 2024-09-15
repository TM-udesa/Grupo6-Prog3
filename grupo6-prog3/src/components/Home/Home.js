import { Component } from "react";

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json() )
            .then( data => this.setState(
                {datos: data.results}
            ))
            .catch( error => console.log(error));
    }
    render(){
        return(
            <section>
                {this.state.datos.length === 0 ?
                <h3> Cargando... </h3> :
                <>{this.state.datos.map((data, idx)=>
                 <p>{data.name}</p>  
                )}
                </>
                }
                <p>Hola </p>
                
            </section>
        )

    }
}

export default Movies