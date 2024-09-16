import { Component } from "react";
import GridMovies from "../GridMovies/GridMovies";

const HomeMovies = () => {
        return(
            <>
                <section>
                    <GridMovies
                        titulo = "Populares"
                        url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"  
                    />
                    <GridMovies
                        titulo = "Proximamente"
                        url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                    />
                    
                </section>
            </>
        )
}

export default HomeMovies