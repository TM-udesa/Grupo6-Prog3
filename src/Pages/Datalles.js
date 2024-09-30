import Detail from "../components/Detail/Detail"

const Detalles = (props) => {
        return (
            <>
                <Detail id = {props.match.params.id} />
            </>
        )
}

export default Detalles