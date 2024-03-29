

function PokemonCard({ pokemon }) {

    const { name, imgSrc } = pokemon





    return (

        <figure> {imgSrc ? <img src={imgSrc} /> : <p>????</p>}<figcaption>{name}</figcaption> </figure>);




}



export default PokemonCard;