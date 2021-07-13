import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = ({ games, index, setIndex }) => {
    const clickPage = () => {
        if (index === 5) {
            setIndex(4)
        }
        if (index === 4)
        {
            setIndex(5)
        }
        console.log('index',index)
    }


    return (
        <div className="main">
            {games.filter(game=> game.rating_top===index).map(game =>

                <Link className='articles' key={game.id} to={`/${game.name}`}>
                    <h3 className='articles__title'>{game.name}</h3>
                    <p className='articles__date'>{game.released}</p>
                    <img src={game.background_image} alt="" className='article__image' />
                    <ul className='articles__list'>
                        {game.genres.map(genre =>
                            <li className='articles__list__genres' key={genre.id}>{genre.name}</li>)}
                    </ul>
                    <p>
                        Note {game.rating_top} /5
                    </p>
                </Link>
            )}
            <button onClick={clickPage}>suivant</button>

        </div>
    );
};

export default Main;