import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    const { name, imgSrc } = pokemon


    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        }).isRequired,
    }


    return (

        <figure> {imgSrc ? <img src={imgSrc} /> : <p>????</p>}<figcaption>{name}</figcaption> </figure>);




}



export default PokemonCard;