import { Component } from "react";
import Detail from "../components/Detail/Detail"

class Detalles extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id
        }
    }
    
    render() {
        return (
            <>
                <Detail id = {this.state.id} />
            </>
        )
    }
}

export default Detalles