import React, {useState} from "react"
import '../styles.css'

export default function Player ( {player, addPlayerToFavorite} ){
    const errorHandler = (e) => (e.target.src = "images/muse.webp");
    const [inFavorite, setInFavorite] = useState(false);

    const addToFavorite = () => {
        addPlayerToFavorite(player);
        setInFavorite(true); // Update state to indicate product is in cart
      };

    return(
    <div key={player.id} className='player'>         
        <img src={ `images/${player.image}` } alt={player.name} onError={errorHandler}/>
        <div className = 'player-info'>
            <h3 className='player-name'>{player.name}</h3>
            <p className='player-team'>{player.team}</p>
            <p className='player-dob'>{player.birthDate}</p>
            <p className='player-ppg'>{player.ppg}</p>
        </div>
        <button
        onClick={() => addToFavorite(player)}
        className={inFavorite ? "added-to-favorite" : "item-btn"}
      >
        Favorite
      </button> 
    </div>
    )
}
