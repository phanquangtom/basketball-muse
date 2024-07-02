import { useState, useEffect } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import PlayersGrid from './components/PlayersGrid';
import Favorite from './components/Favorite';
import { getPlayers } from './services/apiService';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [players, setPlayers] = useState([]);
  const [favorite, setFavorite] = useState("");

  const addPlayerToFavorite = (player) => {
    setFavorite((prevPlayer) => [...prevPlayer, player]);
  };


  useEffect(() => {
    getPlayers() // async call
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <Header></Header>
        <div>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Favorite">Favorite</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  <PlayersGrid
                    players={players}
                    addPlayerToFavorite={addPlayerToFavorite}
                  ></PlayersGrid>
                }
              ></Route>
              <Route
                path="/favorite"
                element={<Favorite players={favorite}></Favorite>}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
