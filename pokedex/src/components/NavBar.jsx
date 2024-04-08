
function NavBar ({pokemonList ,setPokemonIndex } ){

 
  const handlePokemonClick = (index, pokemonName) => {
    setPokemonIndex(index);
    if (pokemonName === "pikachu") {
      alert("pika pika !!!");
    }
  };
return (
    <>
    
{pokemonList.map((pokemon, index )=><button onClick={()=>handlePokemonClick(index, pokemon.name)} key= {pokemon.name}>{pokemon.name}</button>  )}




    </>
  )
}

export default NavBar 