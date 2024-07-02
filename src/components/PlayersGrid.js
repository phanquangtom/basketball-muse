import React, {useState, useEffect} from 'react';
import Player from './Player';
import '../styles.css';
 
export default function PlayersGrid({players, addPlayerToFavorite}){

    const[search, setSearch] = useState([]);

    const[points, setPoints] = useState([]);

    // useEffect(()=>{
    //     fetch("player.json") //async call
    //     .then(response => response.json())
    //     .then(data => setPlayers(data))
    // },[]);

    const searchHandler = (e) => setSearch(e.target.value);

    const pointsHandler = (e) => setPoints(e.target.value);

    const pointsRange = (playerPoints, points) => {
        if (points === "0 - 10") {
          return playerPoints >=0 && playerPoints <= 10;
        } else if (points === "10 - 20") {
          return playerPoints > 10 && playerPoints <= 20;
        } else if (points === "20 - 30") {
          return playerPoints > 20 && playerPoints <= 30;
        } else if (points === "30+") {
          return playerPoints > 30;
        }
        return true;
      };

    // const pointsRange = points.match(/\d+/g);

    const filteredPlayers = players.filter((player)=>(player.name.toLowerCase().includes(search) && pointsRange(player.ppg, points)));


    return(
        <div>
            <input type='text' className='search-input' value={search} onChange={searchHandler}/>
            <div className='filter-slot'>
                <label>Points Per Game</label>
                <select className='filter-dropdown' onChange={pointsHandler} value={points}>
                    <option>Points Per Game</option>
                    <option>0 - 10</option>
                    <option>10 - 20</option>
                    <option>20 - 30</option>
                    <option>30+</option>
                </select>
            </div>
            <div className = 'players-grid'>
                {
                filteredPlayers.map(player => (
                <Player player={player} key={player.id} addPlayerToFavorite={addPlayerToFavorite}></Player> 
                ))
                }
            </div>
        </div>     
    );
}