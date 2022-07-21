import './character.css';

function Character({character}) {
    return (
        <div className="characters">
            <h3>{character.name}</h3>
            <img className="image" src={character.image} alt={character.name} />
            <p>{character.origin.name}</p>
        </div>
    )
}

export default Character