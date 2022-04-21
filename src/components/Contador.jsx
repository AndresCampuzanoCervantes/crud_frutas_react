import React from 'react'

export const Contador = () => {
    const [contardor,setContador]=React.useState(0);
    const aumentar=()=>{
        setContador(contardor+1)
    }
    const decrementar=()=>{
        setContador(contardor-1)
    }
    return (
        <>
            <hr />
            <h1>
                Contador
            </h1>
            <h1>El contador de la variable contador es: {contardor}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )
}

export default Contador