
import GridMovies from "../GridMovies/GridMovies";
import { Link } from "react-router-dom"
import SearchForm from "../Search/SearchForm";
const HomeMovies = (props) => {
        return(
            <>
                <section>

                    <article>
                    
                    <GridMovies
                        titulo = "Populares"
                        url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"  
                        limit = "5"
                    />
                        <div class="containerBTN">
                            <button class="btn"><Link to="./Populares">Ver todos</Link></button>
                        </div>
                   
                    </article>
                    
                    <article>
                    
                    <GridMovies
                        titulo = "Proximamente"
                        url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                        limit = "5"
                    />
                        <div class="containerBTN">
                            <button class="btn"><Link to="./Proximamente">Ver todos</Link></button>
                        </div>

                    </article>
                </section>
            </>
        )
}

export default HomeMovies