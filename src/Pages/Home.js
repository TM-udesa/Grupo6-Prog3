import HomeMovies from "../components/HomeMovies/HomeMovies"

const Home = (props) => {
    return(
        <>      
           <HomeMovies history={props.history} />
        </>
    )
}

export default Home