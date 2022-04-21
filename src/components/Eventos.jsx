import React from 'react'

const Eventos = () => {
    const [text,setTexto] =  React.useState('Texto inicial')
    const eventoclick =()=> {
        const aux = 'Texto inicial'
        if (text===aux) {
            setTexto('Cambio el texto...')
            return
        }
            setTexto(aux)
    }
  return (
    <>
    <hr />
        <h2>{text}</h2>
        <button onClick={eventoclick}>Cambiar texto</button>
    </>
  )
}

export default Eventos