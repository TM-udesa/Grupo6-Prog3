import { Component } from "react";
import GridMovies from "../GridMovies/GridMovies";
import { Link } from "react-router-dom"

const HomeMovies = () => {
        return(
            <>
                <section> 
                    <GridMovies
                        titulo = "Populares"
                        url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"  
                        limit = "5"
                    />
                    <button><Link to="./Populares">Ver todos</Link></button>
                    <GridMovies
                        titulo = "Proximamente"
                        url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                        limit = "5"
                    />
                    <button><Link to="./Proximamente">Ver todos</Link></button>
                </section>
            </>
        )
}

export default HomeMovies