import React from 'react'

const PokeApi = () => {
    const [pokemones,setPokemones]= React.useState([])
    const [sprints,setSprites]= React.useState("")
    const ObtenerPokemones = async () => {
        try {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
          const data = await res.json();
          const results = await data.results;
          setPokemones(results)
        } catch (error) {
          console.log(error);
        }
      
    };

    const cargarGifPokemon = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          const results = await data.sprites.front_default;
          setSprites(results)
        } catch (error) {
          console.log(error);
        }
      
    };
  return (
    <>
        <button onClick={ObtenerPokemones}>Obtener Pokemones</button>
        {
            pokemones.map(({name,url}) =>(
                <div key={name}> 
                    <a href={`#${name}`} onClick={()=>cargarGifPokemon(url)}>{name}</a>
                    
                </div>
            ))
        }
        {
            sprints.trim()? <img src={sprints} alt={sprints}/>: ""
        }
    </>
  )
}

export default PokeApi