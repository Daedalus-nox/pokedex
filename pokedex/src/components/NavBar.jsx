
function NavBar ({pokemonList ,setPokemonIndex } ){



return (
    <>
    
{pokemonList.map((pokemon, index )=><button onClick={()=>{setPokemonIndex(index)}} key= {pokemon.name}>{pokemon.name}</button>  )}




    </>
  )
}

export default NavBar 