import axios from 'axios';

export function getGames(){
    return async function(dispatch){
        var json = await axios.get("localhost:3002/videogames", {
            
        })
        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        })
    }
}
