import {useState,useEffect} from 'react'

const PreticionApi = () => {
    const [personajes,setPersonajes]= useState([])
    const [paginacion,setPaginacion]= useState(1)
    const ObtenerPersonajes = async (paginacion) => {
        try {
          const res = await fetch("https://rickandmortyapi.com/api/character/?page="+paginacion);
          const data = await res.json();
          const results = await data.results;
           setPersonajes(results)
        } catch (error) {
          console.log(error);
        }
      
    };
  

    useEffect(() => {
        ObtenerPersonajes(paginacion);
    },[paginacion])


    const siguente=() => {
        setPaginacion(paginacion+1);
     
    }

    const atras=() => {
        if (paginacion>1) 
            setPaginacion(paginacion-1);
    }
  return (
    <>
        <h1>Peticion Personajes de Rick and Morty</h1>
        <button onClick={ObtenerPersonajes}>Obtener Personajes</button>
        <button onClick={siguente}>siguente</button>
        <button onClick={atras}>atras</button>
        {
            personajes.map(({id,name,image}) =>(
                <div key={id}> 
                    <h4>{id} - {name}</h4>
                    <img src={image} alt={name} />
                </div>
            ))
        }
    </>
  )
}

export default PreticionApi