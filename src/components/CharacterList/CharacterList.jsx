import './characterList.css';
import { useEffect, useState } from 'react';
import Character from '../Character/Character';
import NavPage from '../NavPage/NavPage';

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
        }

        fetchData()
    }, [page]);

    return (
        <div>
            <NavPage page={page} setPage={setPage}/>
            <div className='grid-container'>
                {characters.map((character) => {
                    return (
                        <div className='grid' key={character.id}>
                            <Character character={character} />
                        </div>
                    );
                })}
            </div>
            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList