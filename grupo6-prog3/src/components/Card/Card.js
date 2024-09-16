const Card = (props) => {
    const {nombre} = props;

    return(
        <article>
            <h2>{nombre}</h2>
        </article>
    )
}

export default Card