export const CardOpiniones = (props) => {
    return (
        <>
                    <div className='card-opiniones'>
                        <div className='renglon-superior'>
                            <p>{props.Frase}</p>
                        </div>
                        <div className='renglon-inferior'>
                            <div className='foto-opiniones-conteiner'>
                                <img src={props.Foto} />
                            </div>
                            <div className="opiniones-info-container">
                                <h4>{props.Nombre}</h4>
                                <p>{props.Compania}</p>
                            </div>
                        </div>
                    </div>

        </>
    )
}

