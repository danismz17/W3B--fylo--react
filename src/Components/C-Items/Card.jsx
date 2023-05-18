
export const Card = (props) => {
    return (
        <>
            <div>
                <img src={props.Imagen}/>
                <h3>{props.Titulo}</h3>
                <p> {props.Descripcion}</p>
            </div>

        </>
    )
}

