
const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];


function PokemonCard() {

    const pokemon = { name: pokemonList[0].name, image: pokemonList[0].imgSrc }



    return (
        <figure> {pokemon.image ? <img src={pokemon.image} /> : <p>????</p>}<figcaption>{pokemon.name}</figcaption> </figure>);



}





export default PokemonCard;