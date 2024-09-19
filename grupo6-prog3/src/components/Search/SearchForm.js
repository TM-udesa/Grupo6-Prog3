import { Component } from "react";

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            query:"",

        }
    }
    handleFormChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleCancelSumbit(e){
        e.preventDefault()
    }

    handleFormSumbit(){
        
        this.props.history.push("/search",{query:this.state.query})
    }

    render(){
        return(
            <div>
            <form onSubmit={(e)=>this.handleCancelSumbit(e)}>
                <input onChange={(e)=>this.handleFormChange(e)} name="query" value={this.state.query} />
                <button onClick={()=>this.handleFormSumbit()}>Search</button>
            </form>
        </div>
        )
    }
    
       
}

export default SearchForm