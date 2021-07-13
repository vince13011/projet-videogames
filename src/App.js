import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

//request API
import getGames from './axios/getGames';

//component
import Home from './Home';
import GamePage from './GamePage';


const App = () => {
    const [games, setGames] = useState([]);
    const [index, setIndex] = useState(5);
    useEffect(() => {
        return (
            getGames(setGames)
        )
    }, []);

    return (
        <div className='body'>
            <Switch>
                <Route
                    exact
                    path="/">
                    <Home games={games} index={index} setIndex={setIndex} />
                </Route>

                {games.map((game) =>
                <Route
                    exact
                    path={`/${game.name}`}>
                    <GamePage games={game} index={index} setindex={setIndex}/>
                </Route>
                )}
            </Switch>
        </div>
    )
}

export default App;
