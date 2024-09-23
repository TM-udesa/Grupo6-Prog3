import React, { Component } from 'react'

export default class FavoritosIcon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false,
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

  render() {
    return (
        <button onClick={() => !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarDeFavoritos()}>
        {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
    </button>
    )
  }
}
