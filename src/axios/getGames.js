import axios from 'axios';

const getGames= async (setelement)=>{
    const allgames = await axios.get('https://api.rawg.io/api/games?key=ba28991cf3c644cf99da311fdd7d3b49');
    setelement(allgames.data.results);
    console.log('games', allgames.data.results)

}
export default getGames;