import React from 'react';

import Header from './Header';
import Main from './Main';

const App = ({games, index, setIndex}) => {
     
            return(
            <div className='body'>
                <Header/>
                <Main games={games} index={index} setIndex={setIndex}/>
            </div>
            )
}

export default App;