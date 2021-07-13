import React from 'react';
import Header from './Header';
import './GamePage.scss';


const GamePage = ({games}) => {
     
            return(
            <div className='article'>
                <Header/>
                <h3 className='article__title'>{games.name}</h3>
                <p className='article__date'>{games.released}</p>
                <img className='article__image'src={games.background_image} alt="" />
                <ul className='article__list'>
                {games.genres.map(genre =>
                    <li className='article__list__element'>{genre.name}</li>)}
                </ul>
                <p  className='article__note'>
                    Note {games.rating_top}/5
                </p>
                <p  className='article__note'>
                    Note Metacritic {games.metacritic}
                </p>
                <ul className='article__list'>
                    <p>Support</p>
                {games.platforms.map(plat =>
                    <li className='article__list__element'>{plat.platform.name}</li>)}
                </ul>
            </div>
            )
}

export default GamePage;