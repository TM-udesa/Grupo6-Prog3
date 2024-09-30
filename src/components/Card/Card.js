import { Component } from "react"
import { Link } from "react-router-dom"
import "./Card.css"
import FavoritosIcon from "../FavoritosIcon/FavoritosIcon";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false,
            verDescripcion: false
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parseStorage = JSON.parse(storage)
            const estaFav = parseStorage.includes(this.props.id)

            if (estaFav) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    agregarAFavoritos() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parseStorage = JSON.parse(storage)
            parseStorage.push(this.props.id)
            const stringStorage = JSON.stringify(parseStorage)
            localStorage.setItem("favoritos", stringStorage)
        } else {
            const primerFavorito = [this.props.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    }

    quitarDeFavoritos() {
        const storage = localStorage.getItem("favoritos")
        const parseStorage = JSON.parse(storage)
        const restoFavoritos = parseStorage.filter(id => id !== this.props.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)

        this.setState({
            esFavorito: false
        })
    }
    handleVerDescripcion = () => (
        this.setState(prevState => ({
            verDescripcion: !prevState.verDescripcion
        }))

    )
    render() {
        return (
            <article className="card">
                <h2>{this.props.nombre}</h2>
                <img src={this.props.image} alt="Imagen pelicula" />
                <FavoritosIcon id={this.props.id} />
                <button><Link to={`pelicula/${this.props.id}`}>Ver detalle</Link></button>
                <div>
                    {this.state.verDescripcion ? 
                        <button onClick={() => this.handleVerDescripcion()}>Ver Menos</button> :
                        <button onClick={() => this.handleVerDescripcion()}>Ver Descripcion</button>}
                </div>

                <p className={this.state.verDescripcion ? "mostrar" : "ocultar"}>{this.props.descripcion}</p>

            </article >
        )
    }
}


export default Card