import React from 'react'

const Variables = () => {
    const saludo = "Hola mundo"
    const image = "https://picsum.photos/300"
    const text_alt = "Esto es una imagen de picsum"
    return (
        <>
            <h1>{saludo}</h1>
            <img src={image} alt={text_alt} />
        </>
    )
}

export default Variables